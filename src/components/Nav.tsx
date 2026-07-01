import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedinIn, FaDownload, FaBars, FaXmark } from 'react-icons/fa6'
import Monogram from './Monogram'
import { identity, navLinks } from '../content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'border-b border-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-3" aria-label="Tasos Panayi — home">
          <Monogram size={38} className="rounded-xl" />
          <span className="font-display text-sm font-semibold tracking-wide">Tasos Panayi</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <span className="mx-2 h-5 w-px bg-white/10" />
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-300 transition-colors hover:text-white"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-300 transition-colors hover:text-white"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a href={identity.cvHref} download className="btn btn-primary ml-2 !px-5 !py-2">
            <FaDownload /> CV
          </a>
        </div>

        <button
          className="p-2 text-slate-200 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaXmark size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {open && (
        <div className="glass mx-4 mt-3 rounded-2xl p-4 md:hidden">
          <div className="flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-slate-200 transition-colors hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-4 px-3">
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-300 hover:text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-300 hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a href={identity.cvHref} download className="btn btn-primary ml-auto !py-2">
              <FaDownload /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
