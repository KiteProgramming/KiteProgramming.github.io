import { facts, identity } from '../content'

export default function About() {
  const [before, after] = identity.founderNote.split(identity.studio.name)

  return (
    <section id="about" className="relative px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="reveal section-eyebrow mb-3">about</div>
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <div className="reveal">
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">
              Engineer who ships the <span className="gradient-text">whole thing</span>.
            </h2>
            <p className="mb-4 leading-relaxed text-slate-300">{identity.summary}</p>
            <p className="leading-relaxed text-slate-300">
              {before}
              <a
                href={identity.studio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-glow hover:underline"
              >
                {identity.studio.name}
              </a>
              {after}
            </p>
          </div>

          <div className="reveal delay-1 glass rounded-2xl p-6">
            <ul className="space-y-4">
              {facts.map((f) => (
                <li key={f.label}>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-brand-glow/80">
                    {f.label}
                  </div>
                  <div className="mt-1 text-sm text-slate-200">{f.value}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
