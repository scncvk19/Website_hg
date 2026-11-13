#!/usr/bin/env bash
# Interne Test-Website bereitstellen; Git-Updates separat als Checkout-Eigentümer.
set -euo pipefail

ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

BIND_IP="${1:-}"
if [[ $# -ne 1 || ! "$BIND_IP" =~ ^([0-9]{1,3}\.){3}[0-9]{1,3}$ ]]; then
    echo "Aufruf: bash scripts/deploy-test.sh <feste-VM-LAN-IP>" >&2
    exit 1
fi

# Nur eine tatsächlich zugewiesene private IPv4-Adresse akzeptieren.
case "$BIND_IP" in
    10.*|192.168.*|172.1[6-9].*|172.2[0-9].*|172.3[01].*) ;;
    *) echo "Nur private LAN-Adressen sind für diese Testumgebung vorgesehen." >&2; exit 1 ;;
esac
if ! ip -o -4 addr show scope global | awk -v wanted="$BIND_IP" '{split($4,a,"/"); if(a[1]==wanted) found=1} END {exit !found}'; then
    echo "Die LAN-IP $BIND_IP ist dieser VM nicht zugewiesen. Keine Änderung." >&2
    exit 1
fi
if [[ ! -f compose.yaml || ! -f Dockerfile ]]; then
    echo "Compose-Datei oder Dockerfile fehlt." >&2
    exit 1
fi
if ! command -v docker >/dev/null; then
    echo "Docker fehlt. Bitte vorhandene Installation prüfen." >&2
    exit 1
fi
if [[ -L .env || ( -e .env && ! -f .env ) ]]; then
    echo ".env ist keine reguläre Datei; bitte manuell prüfen." >&2
    exit 1
fi

# Vorhandene Einstellungen nicht überschreiben; nur die LAN-Bindung ändern.
umask 077
touch .env
chmod 600 .env
TMP="$(mktemp .env.deploy.XXXXXX)"
trap 'rm -f -- "$TMP"' EXIT
awk '!/^[[:space:]]*(export[[:space:]]+)?HG_WEBSITE_BIND_IP[[:space:]]*=/' .env > "$TMP"
printf '\nHG_WEBSITE_BIND_IP=%s\n' "$BIND_IP" >> "$TMP"
mv -- "$TMP" .env

# Keine Secrets aus der Compose-Konfiguration ausgeben.
# Kein down, kein prune, keine Änderungen an anderen Diensten oder am Netzwerk.
echo "=== Website bauen und starten ==="
if docker info >/dev/null 2>&1; then
    export HG_WEBSITE_BIND_IP="$BIND_IP"
    docker compose config --quiet
    docker compose up -d --build website
    docker compose ps website
else
    echo "Docker benötigt Root-Rechte. Anmeldung mit su."
    printf -v ROOT_COMMAND 'cd %q && export HG_WEBSITE_BIND_IP=%q && docker compose config --quiet && docker compose up -d --build website && docker compose ps website' "$ROOT" "$BIND_IP"
    su -s /bin/bash -c "$ROOT_COMMAND" root
fi

URL="http://$BIND_IP:3000"
echo "=== HTTP-Prüfung auf der VM ==="
if command -v curl >/dev/null; then
    for ((attempt=1; attempt<=15; attempt++)); do
        if curl --fail --silent --max-time 4 --output /dev/null "$URL/"; then
            echo "Website antwortet: $URL"
            echo "Jetzt im Firmennetz am Mitarbeiter-PC öffnen."
            exit 0
        fi
        sleep 2
    done
    echo "Website antwortet noch nicht. Containerstatus und Logs prüfen." >&2
    exit 1
else
    echo "curl fehlt; HTTP-Prüfung nicht durchgeführt."
    echo "Bitte im Browser öffnen: $URL"
fi
