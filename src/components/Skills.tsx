import { skills } from '../content'

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="reveal section-eyebrow mb-3">skills</div>
        <h2 className="reveal mb-12 text-3xl font-bold md:text-4xl">Tools I reach for.</h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, i) => (
            <div
              key={g.label}
              className={`reveal delay-${Math.min((i % 3) + 1, 4)} glass rounded-2xl p-5`}
            >
              <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-brand-glow/80">
                {g.label}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
