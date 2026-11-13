import { PageIntro } from "@/components/Site";
import { SocialIcon } from "@/components/SocialLinks";
import { socialProfiles } from "@/lib/social";
import { getInstagramFeed } from "@/lib/instagram";
import type { Language } from "@/lib/locale";
import styles from "./instagram.module.css";

const channelCopy = {
  instagram: {
    de: { title: "Instagram", description: "Einblicke in unseren IT-Alltag, aktuelle Projekte und praktische Tipps für sichere IT.", action: "Auf Instagram folgen" },
    en: { title: "Instagram", description: "Insights into our daily IT work, current projects and practical tips for secure IT.", action: "Follow us on Instagram" }
  },
  linkedin: {
    de: { title: "LinkedIn", description: "Unternehmensneuigkeiten, Fachwissen und aktuelle Themen rund um IT-Sicherheit und Digitalisierung.", action: "Auf LinkedIn folgen" },
    en: { title: "LinkedIn", description: "Company news, professional insights and current topics in IT security and digitalisation.", action: "Follow us on LinkedIn" }
  }
} as const;

export default async function InstagramFeed({ lang }: { lang: Language }) {
  const de = lang === "de";
  // Der vorbereitete Feed bleibt über die Laufzeitkonfiguration standardmäßig deaktiviert.
  const feed = await getInstagramFeed();
  const format = new Intl.DateTimeFormat(de ? "de-DE" : "en-GB", { dateStyle: "medium", timeZone: "Europe/Berlin" });
  const channels = socialProfiles.filter(profile => (profile.platform === "instagram" || profile.platform === "linkedin") && profile.url.startsWith("https://"));

  return <>
    <PageIntro eyebrow={de ? "HG-Systeme · Aktuelles" : "HG-Systeme · News"} title={de ? "Neuigkeiten aus unserem IT-Alltag" : "News from our IT work"} text={de ? "Entdecken Sie aktuelle Projekte, IT-Sicherheitstipps und Einblicke in unser Unternehmen. Folgen Sie uns auf Instagram und LinkedIn." : "Discover current projects, IT security tips and insights into our company. Follow us on Instagram and LinkedIn."}/>
    <section className="section"><div className="container">
      <div className={styles.heading}><div><h2>{de ? "Bleiben Sie mit uns vernetzt" : "Stay connected with us"}</h2><p className="muted">{de ? "Unsere Neuigkeiten finden Sie auf beiden Unternehmensprofilen." : "Find our latest updates on both company profiles."}</p></div></div>
      <div className={styles.channels}>
        {channels.map(profile => {
          if (profile.platform !== "instagram" && profile.platform !== "linkedin") return null;
          const copy = channelCopy[profile.platform][lang];
          return <article className={styles.channel} key={profile.platform}>
            <span className={styles.channelIcon}><SocialIcon platform={profile.platform}/></span>
            <h3>{copy.title}</h3>
            <p>{copy.description}</p>
            <a className="button" href={profile.url} target="_blank" rel="noopener noreferrer">{copy.action} ↗</a>
          </article>;
        })}
      </div>
      <p className={styles.note}>{de ? "Mit uns immer sicher vernetzt!" : "Stay securely connected with us!"}</p>

      {feed.status !== "disabled" && <div className={styles.feedSection}>
        <div className={styles.heading}><div><h2>{de ? "Unsere Instagram-Beiträge" : "Our Instagram posts"}</h2><p className="muted">@hgsysteme{feed.updatedAt ? " · " + (de ? "Stand: " : "Updated: ") + format.format(new Date(feed.updatedAt)) : ""}</p></div></div>
        {feed.posts.length ? <div className={styles.grid}>{feed.posts.map(post => <article className={styles.card} key={post.id}>
          <a className={styles.media} href={post.permalink} target="_blank" rel="noopener noreferrer" aria-label={de ? "Originalbeitrag auf Instagram öffnen" : "Open original Instagram post"}>
            {post.imageUrl ? <img src={"/api/instagram/image/" + post.id} alt={post.caption ? post.caption.slice(0,160) : (de ? "Vorschau des Instagram-Beitrags" : "Instagram post preview")} loading="lazy" width={600} height={600}/> : <span>{de ? "Beitrag auf Instagram ansehen" : "View post on Instagram"}</span>}
          </a>
          <div className={styles.body}><time dateTime={post.timestamp}>{format.format(new Date(post.timestamp))}</time>
            <p>{post.caption || (de ? "Ein Beitrag von HG-Systeme." : "A post from HG-Systeme.")}</p>
            <a className="text-link" href={post.permalink} target="_blank" rel="noopener noreferrer">{de ? "Originalbeitrag ansehen" : "View original post"} ↗</a>
          </div>
        </article>)}</div> : <p className="muted">{de ? "Weitere aktuelle Veröffentlichungen finden Sie auf unseren oben verlinkten Unternehmensprofilen." : "Find more recent publications on the company profiles linked above."}</p>}
        {feed.posts.length > 0 && <p className={styles.note}>{de ? "Die Beiträge werden in ihrer Originalsprache angezeigt. Neue Inhalte werden beim nächsten Abruf übernommen. Videos und Galerien sind als Vorschau verlinkt." : "Posts appear in their original language. New content is included on the next refresh. Videos and galleries link to their originals."}</p>}
      </div>}
    </div></section>
  </>;
}
