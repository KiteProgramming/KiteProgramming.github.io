import { roles } from '../content'

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="reveal section-eyebrow mb-3">experience</div>
        <h2 className="reveal mb-12 text-3xl font-bold md:text-4xl">
          Five years in fintech, and counting.
        </h2>

        <ol className="relative">
          {/* the "pipeline" thread connecting every role */}
          <span
            className="thread absolute bottom-2 left-3 top-2 w-px opacity-60"
            aria-hidden
          />
          {roles.map((r, i) => (
            <li
              key={`${r.company}-${r.title}`}
              className={`reveal delay-${Math.min(i + 1, 4)} relative pl-10 ${
                i === roles.length - 1 ? '' : 'pb-10'
              }`}
            >
              <span
                className="absolute left-3 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan ring-4 ring-slate-900"
                aria-hidden
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold text-white">{r.title}</h3>
                <span className="font-mono text-xs text-slate-400">
                  {r.start} — {r.end}
                </span>
              </div>
              <div className="mt-0.5 font-mono text-sm text-brand-glow/90">
                {r.company} · {r.location}
              </div>
              <p className="mt-2 max-w-2xl leading-relaxed text-slate-300">{r.blurb}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
