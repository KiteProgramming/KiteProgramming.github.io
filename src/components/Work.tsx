import { FaAppStoreIos, FaGooglePlay, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { projects } from '../content'
import type { LinkKind, Project } from '../content'

function LinkIcon({ kind }: { kind: LinkKind }) {
  if (kind === 'apple') return <FaAppStoreIos />
  if (kind === 'google') return <FaGooglePlay />
  return <FaArrowUpRightFromSquare />
}

function Card({ p }: { p: Project }) {
  return (
    <article className="glass card flex h-full flex-col p-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
          {p.category}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-brand-cyan">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          {p.status}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-white">{p.name}</h3>
      {p.studio && (
        <span className="mt-2 inline-flex w-fit items-center rounded-full border border-brand-glow/25 bg-brand-blue/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-brand-glow">
          PMP Novelty Solutions
        </span>
      )}

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{p.blurb}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/5 pt-4">
        {p.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-brand-glow"
          >
            <LinkIcon kind={l.kind} /> {l.label}
          </a>
        ))}
        {p.comingSoon && (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-500">
            <span className="dot-soon h-1.5 w-1.5 rounded-full bg-slate-500" />
            {p.comingSoon}
          </span>
        )}
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section id="work" className="relative px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <div className="reveal section-eyebrow mb-3">selected work</div>
        <h2 className="reveal mb-3 text-3xl font-bold md:text-4xl">
          Products I&rsquo;ve <span className="gradient-text">shipped</span>.
        </h2>
        <p className="reveal delay-1 mb-12 max-w-2xl text-slate-300">
          Real, live products &mdash; built end-to-end and running in production, from web and
          mobile apps to the PMP Novelty Solutions studio suite.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={p.name} className={`reveal delay-${Math.min((i % 3) + 1, 4)} h-full`}>
              <Card p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
