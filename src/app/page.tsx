import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProfileGallery } from "@/components/ui/ProfileGallery";
import { getTechIcon } from "@/lib/tech-icons";
import { profile, projects, blogPosts } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <Section className="pt-24 md:pt-32">
        <FadeIn variant="fade-in-up">
          <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-start md:justify-between">
            {/* Left: Text */}
            <div className="flex-1">
              <p className="neo-chip mb-4 inline-block">
                {profile.location} &middot; {profile.yearsOfExperience}
              </p>
              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-on-surface md:text-6xl lg:text-7xl">
                {profile.name.split(" ")[0]}{" "}
                <span className="text-primary">{profile.name.split(" ")[1]}</span>
              </h1>
              <p className="mt-4 text-xl font-semibold text-on-surface-variant">
                {profile.role}
              </p>
              <p className="mt-4 max-w-2xl text-xl leading-relaxed text-on-surface">
                {(() => {
                  const dashIdx = profile.tagline.indexOf("—");
                  if (dashIdx === -1) return profile.tagline;
                  return (
                    <>
                      {profile.tagline.slice(0, dashIdx)}
                      <span className="text-primary font-semibold italic">
                        {profile.tagline.slice(dashIdx)}
                      </span>
                    </>
                  );
                })()}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="primary" href={`mailto:${profile.email}`}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <rect x="1" y="3" width="14" height="10" rx="2" />
                    <path d="M1 4l7 5 7-5" />
                  </svg>
                  Contattami
                </Button>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-button inline-flex size-[46px] items-center justify-center p-0"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-button inline-flex size-[46px] items-center justify-center p-0"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <Button href="/projects">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  >
                    <path d="M2 4l6 4 6-4M2 8l6 4 6-4" />
                  </svg>
                  I Miei Progetti
                </Button>
              </div>
            </div>

            {/* Right: Profile Gallery */}
            <div className="shrink-0 md:self-start">
              <ProfileGallery
                images={[
                  { src: "/images/profile-1.jpg", alt: profile.name },
                  { src: "/images/profile-2.jpg", alt: profile.name },
                  { src: "/images/profile-3.jpg", alt: profile.name },
                ]}
                name={profile.name}
              />
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ─── Bio ─── */}
      <Section title="About Me" subtitle="Un po' del mio percorso.">
        {/* Quick Stats Row */}
        <FadeIn>
          <div className="mb-10 grid grid-cols-3 gap-4">
            <Card className="text-center">
              <p className="text-2xl font-bold text-primary">{profile.yearsOfExperience.replace("+", "")}<span className="text-on-surface">+</span></p>
              <p className="mt-1 text-sm text-on-surface-variant">Anni di Esperienza</p>
            </Card>
            <Card className="text-center">
              <svg className="mx-auto mb-2 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>
              <p className="text-sm text-on-surface-variant">Applicazioni<br />Enterprise</p>
            </Card>
            <Card className="text-center">
              <svg className="mx-auto mb-2 h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" /></svg>
              <p className="text-sm text-on-surface-variant">Full Stack<br />Frontend + Backend</p>
            </Card>
          </div>
        </FadeIn>

        {/* Bio paragraphs — 2-column grid, then full-width */}
        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn className="flex" delay={200}>
            <Card className="flex w-full flex-col text-base leading-relaxed text-on-surface-variant">
              <svg className="mb-3 h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
              <p className="grow">{profile.bio[0]}</p>
            </Card>
          </FadeIn>
          <FadeIn className="flex" delay={300}>
            <Card className="flex w-full flex-col text-base leading-relaxed text-on-surface-variant">
              <svg className="mb-3 h-6 w-6 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
              <p className="grow">{profile.bio[1]}</p>
            </Card>
          </FadeIn>
        </div>

      </Section>

      {/* ─── Skills ─── */}
      <Section
        title="Skills e Strumenti"
        subtitle="Tecnologie con cui lavoro ogni giorno."
      >
        <div className="flex flex-wrap justify-center gap-6">
          {Object.entries(profile.skills).map(([category, items], i) => (
            <FadeIn key={category} delay={i * 80}>
              <Card className="min-w-[260px] basis-56">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => {
                    const tech = getTechIcon(skill);
                    return (
                      <span
                        key={skill}
                        className="neo-chip inline-flex items-center gap-1.5 text-xs"
                        style={
                          tech
                            ? {
                                backgroundColor: tech.bgColor,
                                color: tech.color,
                                border: `1px solid ${tech.color}22`,
                              }
                            : undefined
                        }
                      >
                        {tech && (
                          <span className="text-[13px]">{tech.icon}</span>
                        )}
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ─── Experience ─── */}
      <Section
        title="Esperienza"
        subtitle="Posti in cui ho lavorato e cose che ho costruito."
      >
        <div className="space-y-6">
          {profile.experience.map((exp, i) => (
            <FadeIn key={i} delay={i * 100}>
              <Card hover>
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-on-surface">
                      {exp.role}
                    </h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <Chip>{exp.period}</Chip>
                </div>
                <p className="mt-3 text-on-surface-variant">
                  {exp.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ─── Featured Projects ─── */}
      <Section
        title="Progetti in Vetrina"
        subtitle="Lavori selezionati dal mio portfolio."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project, i) => (
            <FadeIn key={project.slug} delay={i * 80}>
              <Card hover className="flex h-full flex-col">
                {project.image && (
                  <div className="mb-4 overflow-hidden rounded-xl bg-surface-container-low shadow-pressed-sm">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-video w-full object-cover"
                    />
                  </div>
                )}
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-on-surface">
                    {project.title}
                  </h3>
                  <Chip>{project.year}</Chip>
                </div>
                <p className="mb-4 flex-1 text-on-surface-variant">
                  {project.description}
                </p>
                <div className="border-t border-outline-variant/30 pt-3">
                  <div className="flex flex-wrap items-center gap-x-1.5 text-[11px] font-medium uppercase tracking-wider text-outline">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tag}>
                        {tIdx > 0 && <span className="mx-0.5 text-outline-variant">&middot;</span>}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={320}>
          <div className="mt-8 text-center">
            <Button href="/projects">Vedi Tutti i Progetti &rarr;</Button>
          </div>
        </FadeIn>
      </Section>

      {/* ─── Recent Blog Posts ─── */}
      <Section
        title="Ultimi dal Blog"
        subtitle="Riflessioni su sviluppo, design e creazione."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.slice(0, 2).map((post, i) => (
            <FadeIn key={post.slug} delay={i * 100}>
              <Card hover>
                <div className="mb-3 flex items-center gap-3 text-sm text-on-surface-variant">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("it-IT", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-on-surface">
                  {post.title}
                </h3>
                <p className="mb-4 text-on-surface-variant">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Chip key={tag}>{tag}</Chip>
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={200}>
          <div className="mt-8 text-center">
            <Button href="/blog">Leggi Tutti gli Articoli &rarr;</Button>
          </div>
        </FadeIn>
      </Section>

      {/* ─── Education ─── */}
      <Section
        title="Formazione"
        className="pb-24 md:pb-32"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {profile.education.map((edu, i) => (
            <FadeIn key={i} delay={i * 100}>
              <Card>
                <h3 className="text-xl font-semibold text-on-surface">
                  {edu.degree}
                </h3>
                <p className="text-primary">{edu.school}</p>
                <Chip className="mt-2">{edu.period}</Chip>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
