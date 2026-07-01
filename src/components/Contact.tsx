import { FaEnvelope, FaGithub, FaLinkedinIn, FaLocationDot } from 'react-icons/fa6'
import { identity } from '../content'

export default function Contact() {
  return (
    <section id="contact" className="relative px-5 py-24 md:py-32">
      <div className="mx-auto max-w-content">
        <div className="glass reveal relative overflow-hidden rounded-3xl px-6 py-14 text-center md:py-20">
          <div className="section-eyebrow mb-4">contact</div>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-5xl">
            Let&rsquo;s build something that <span className="gradient-text">ships</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            Open to senior engineering roles and product collaborations. The fastest way to reach
            me is email.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${identity.email}`} className="btn btn-primary">
              <FaEnvelope /> {identity.email}
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <FaLinkedinIn /> LinkedIn
            </a>
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <FaGithub /> GitHub
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 font-mono text-xs text-slate-400">
            <FaLocationDot /> {identity.location}
          </div>
        </div>
      </div>
    </section>
  )
}
