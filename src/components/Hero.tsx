import { Fragment } from 'react'
import { FaArrowRightLong, FaDownload } from 'react-icons/fa6'
import { identity, pipeline, stats } from '../content'

function Pipeline() {
  return (
    <div className="flex flex-wrap items-center gap-y-2 font-mono text-xs">
      {pipeline.map((stage, i) => (
        <Fragment key={stage}>
          <span className="flex items-center gap-2 text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan" />
            {stage}
          </span>
          {i < pipeline.length - 1 && (
            <span aria-hidden className="px-2 text-brand-glow/60">
              →
            </span>
          )}
        </Fragment>
      ))}
    </div>
  )
}

const shipLog: { label: string; live: boolean }[] = [
  { label: 'padelclubleague.com', live: true },
  { label: 'App Store · Padel Club League', live: true },
  { label: 'Google Play · Padel Club League', live: true },
  { label: 'NoveltySports · iOS + Android', live: true },
  { label: 'Habit Challenger · iOS + Android', live: true },
  { label: 'moivajewellery.com', live: true },
  { label: "mayasflavours.com", live: true },
]

function ShipLog() {
  return (
    <div className="glass card relative overflow-hidden rounded-2xl p-5">
      <div className="mb-4 flex items-center gap-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
        </span>
        <span className="ml-1 font-mono text-xs text-slate-400">// recently shipped</span>
      </div>
      <ul className="space-y-3 font-mono text-[13px]">
        {shipLog.map((row) => (
          <li key={row.label} className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2.5 text-slate-300">
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${
                  row.live ? 'bg-brand-cyan' : 'dot-soon bg-slate-500'
                }`}
              />
              {row.label}
            </span>
            <span className={row.live ? 'text-brand-cyan' : 'text-slate-500'}>
              {row.live ? 'LIVE' : 'SOON'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative px-5 pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="reveal eyebrow mb-5">senior software engineer · nicosia, cyprus</div>
          <h1 className="reveal delay-1 font-display text-5xl font-bold leading-[1.04] sm:text-6xl md:text-7xl">
            Tasos
            <br />
            <span className="gradient-text">Panayi</span>
          </h1>
          <p className="reveal delay-2 mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            {identity.tagline}
          </p>
          <div className="reveal delay-2 mt-7">
            <Pipeline />
          </div>
          <div className="reveal delay-3 mt-8 flex flex-wrap gap-3">
            <a href="#work" className="btn btn-primary">
              View work <FaArrowRightLong />
            </a>
            <a href={identity.cvHref} download className="btn btn-ghost">
              <FaDownload /> Download CV
            </a>
          </div>
          <dl className="reveal delay-4 mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="gradient-text font-display text-2xl font-bold">{s.value}</dt>
                <dd className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal delay-2 animate-floaty">
          <ShipLog />
        </div>
      </div>
    </section>
  )
}
