# Downloads the public image sources into the local preview; no credentials required.
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$items = Get-Content -Raw (Join-Path $root 'lib/certificate-assets.json') | ConvertFrom-Json
$failed = @()
foreach ($item in $items) {
    $destination = Join-Path (Join-Path $root 'public') ($item.path.TrimStart('/'))
    $temp = "$destination.download"
    try {
        New-Item -ItemType Directory -Force -Path (Split-Path -Parent $destination) | Out-Null
        Invoke-WebRequest -UseBasicParsing -Uri $item.url -OutFile $temp -TimeoutSec 30
        $bytes = [System.IO.File]::ReadAllBytes($temp)
        $valid = $false
        if ($destination.EndsWith('.jpg')) {
            $valid = $bytes.Length -gt 3 -and $bytes[0] -eq 255 -and $bytes[1] -eq 216 -and $bytes[2] -eq 255
        } elseif ($destination.EndsWith('.png')) {
            $valid = $bytes.Length -gt 8 -and [BitConverter]::ToString($bytes[0..7]) -eq '89-50-4E-47-0D-0A-1A-0A'
        } elseif ($destination.EndsWith('.svg')) {
            $svg = [System.Text.Encoding]::UTF8.GetString($bytes)
            $valid = $svg -match '<svg\b' -and $svg -notmatch '<script\b|<foreignObject\b|\son\w+\s*='
        }
        if (-not $valid -or $bytes.Length -gt 10000000) { throw 'Unexpected image format or size' }
        Move-Item -Force -Path $temp -Destination $destination
        Write-Host "OK: $($item.id)"
    } catch {
        $failed += $item.id
        Write-Warning "$($item.id): $($_.Exception.Message)"
    } finally {
        if (Test-Path $temp) { Remove-Item -Force $temp }
    }
}
if ($failed.Count -gt 0) {
    Write-Warning ('Failed: ' + ($failed -join ', '))
    exit 1
}
Write-Host 'All images imported. Review rights and personal data before committing or publishing.'
