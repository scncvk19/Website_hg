import { PageIntro } from "@/components/Site";
import { getInstagramFeed } from "@/lib/instagram";
import type { Language } from "@/lib/locale";
import styles from "./instagram.module.css";

const profile = "https://www.instagram.com/hgsysteme/";
export default async function InstagramFeed({ lang }: { lang: Language }) {
  const de = lang === "de";
  const feed = await getInstagramFeed();
  const format = new Intl.DateTimeFormat(de ? "de-DE" : "en-GB", { dateStyle: "medium", timeZone: "Europe/Berlin" });
  return <>
    <PageIntro eyebrow={de ? "HG-Systeme · Aktuelles" : "HG-Systeme · News"} title={de ? "Neuigkeiten aus unserem IT-Alltag" : "News from our IT work"} text={de ? "IT-Sicherheit, Projekte, praktische Tipps und Einblicke in unser Unternehmen." : "IT security, projects, practical tips and insights into our company."}/>
    <section className="section"><div className="container">
      <div className={styles.heading}><div><h2>{de ? "Unsere Instagram-Beiträge" : "Our Instagram posts"}</h2><p className="muted">@hgsysteme{feed.updatedAt ? " · " + (de ? "Stand: " : "Updated: ") + format.format(new Date(feed.updatedAt)) : ""}</p></div><a className="button" href={profile} target="_blank" rel="noopener noreferrer">{de ? "Instagram-Profil öffnen" : "Open Instagram profile"} ↗</a></div>
      {feed.posts.length ? <div className={styles.grid}>{feed.posts.map(post => <article className={styles.card} key={post.id}>
        <a className={styles.media} href={post.permalink} target="_blank" rel="noopener noreferrer" aria-label={de ? "Originalbeitrag auf Instagram öffnen" : "Open original Instagram post"}>
          {post.imageUrl ? <img src={"/api/instagram/image/" + post.id} alt={post.caption ? post.caption.slice(0,160) : (de ? "Vorschau des Instagram-Beitrags" : "Instagram post preview")} loading="lazy" width={600} height={600}/> : <span>{de ? "Beitrag auf Instagram ansehen" : "View post on Instagram"}</span>}
        </a>
        <div className={styles.body}><time dateTime={post.timestamp}>{format.format(new Date(post.timestamp))}</time>
          <p>{post.caption || (de ? "Ein Beitrag von HG-Systeme." : "A post from HG-Systeme.")}</p>
          <a className="text-link" href={post.permalink} target="_blank" rel="noopener noreferrer">{de ? "Originalbeitrag ansehen" : "View original post"} ↗</a>
        </div>
      </article>)}</div> : <div className="notice"><h3>{feed.status === "ready" ? (de ? "Noch keine Beiträge" : "No posts yet") : (de ? "Beiträge derzeit nicht verfügbar" : "Posts currently unavailable")}</h3><p>{de ? "Unsere aktuellen Veröffentlichungen finden Sie auf unserem Instagram-Profil." : "Find our latest publications on our Instagram profile."}</p></div>}
      <p className={styles.note}>{de ? "Die Beiträge werden in ihrer Originalsprache angezeigt. Neue Inhalte werden beim nächsten Abruf übernommen. Videos und Galerien sind als Vorschau verlinkt." : "Posts appear in their original language. New content is included on the next refresh. Videos and galleries link to their originals."}</p>
    </div></section>
  </>;
}
