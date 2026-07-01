import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import Monogram from './Monogram'
import { identity } from '../content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 px-5 py-10">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Monogram size={32} />
          <div>
            <div className="font-display text-sm font-semibold">Tasos Panayi</div>
            <div className="font-mono text-[11px] text-slate-400">Senior Software Engineer</div>
          </div>
        </div>

        <div className="flex items-center gap-5 text-sm text-slate-300">
          <a
            href={identity.studio.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-glow"
          >
            {identity.studio.name}
          </a>
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-white"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-white"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-content font-mono text-[11px] text-slate-500">
        © {year} Tasos Panayi · Built with React, Vite &amp; Tailwind · Deployed on GitHub Pages
      </div>
    </footer>
  )
}
