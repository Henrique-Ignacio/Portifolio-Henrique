import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { content, projects, SOCIAL } from './content.js'

const SECTIONS = ['about', 'projects', 'experience', 'contact']

const Icon = {
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.6h.06c.53-1 1.84-2.06 3.8-2.06 4.06 0 4.8 2.67 4.8 6.14V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.32-1.96 2.69V21h-4V9.5Z"/></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 7.2L4.4 7H4v.6l8 5.2 8-5.2V7h-.4L12 12.2Z"/></svg>
  ),
}

const links = [
  { key: 'github', label: 'GitHub', href: SOCIAL.github },
  { key: 'linkedin', label: 'LinkedIn', href: SOCIAL.linkedin },
  { key: 'mail', label: 'E-mail', href: `mailto:${SOCIAL.email}` },
]

function useStoredLang() {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('lang')
      if (saved === 'pt' || saved === 'en') return saved
    } catch {
      /* storage indisponível */
    }
    return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
  })
  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* storage indisponível */
    }
  }, [lang])
  return [lang, setLang]
}

function useActiveSection() {
  const [active, setActive] = useState('about')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return active
}

function Sidebar({ t, lang, setLang, active }) {
  return (
    <header className="side">
      <div className="side-top">
        <img className="photo" src="/assets/henrique.png" alt="Henrique Ignacio Ferreira Souza" width="96" height="96" />
        <div>
          <p className="side-name">Henrique Ignacio<br />Ferreira Souza</p>
          <p className="side-role">{t.role}</p>
          <p className="side-place">{t.place}</p>
        </div>
      </div>

      <nav className="nav" aria-label="Principal">
        {SECTIONS.map((id) => (
          <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'true' : undefined}>
            {t.nav[id]}
          </a>
        ))}
      </nav>

      <div className="side-bottom">
        <div className="lang" role="group" aria-label={t.langLabel}>
          {['pt', 'en'].map((l) => (
            <button key={l} type="button" onClick={() => setLang(l)} aria-pressed={lang === l} className={lang === l ? 'is-on' : ''}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <ul className="social">
          {links.map((l) => (
            <li key={l.key}>
              <a href={l.href} aria-label={l.label} title={l.label} target={l.key === 'mail' ? undefined : '_blank'} rel="noreferrer">
                {Icon[l.key]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

function About({ t }) {
  const a = t.about
  return (
    <section id="about" className="section">
      <h1 className="headline">{a.headline}</h1>
      <div className="prose">
        {a.paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>

      <h2 className="h2">{a.skillsTitle}</h2>
      <dl className="skills">
        {a.skills.map(([k, v]) => (
          <div key={k} className="skills-row">
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <h2 className="h2">{a.langsTitle}</h2>
      <ul className="inline-list">
        {a.langs.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </section>
  )
}

function Projects({ t, lang }) {
  const p = t.projects
  return (
    <section id="projects" className="section">
      <h2 className="h2 h2-lead">{p.title}</h2>
      <p className="lead">{p.intro}</p>
      <ol className="timeline">
        {projects.map((pr) => (
          <li key={pr.id} className="tl-item">
            <time className="tl-date">{pr.date[lang]}</time>
            <article className="project">
              <img src={pr.image} alt={`${pr.name}`} loading="lazy" width="1100" height="620" />
              <div className="project-body">
                <h3>{pr.name}</h3>
                <p>{pr.desc[lang]}</p>
                <ul className="chips" aria-label={p.stack}>
                  {pr.tech.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <a className="btn-link" href={pr.repo} target="_blank" rel="noreferrer">
                  {Icon.github}
                  {p.repo}
                </a>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Experience({ t }) {
  const e = t.experience
  return (
    <section id="experience" className="section">
      <h2 className="h2 h2-lead">{e.title}</h2>
      <ul className="rows">
        {e.items.map((it) => (
          <li key={it.org} className="row">
            <span className="row-period">{it.period}</span>
            <div>
              <h3 className="row-title">{it.role}</h3>
              <p className="row-org">{it.org}</p>
              <p>{it.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="h2">{e.eduTitle}</h2>
      <ul className="rows">
        {e.edu.map((it) => (
          <li key={it.org} className="row">
            <span className="row-period">{it.period}</span>
            <div>
              <h3 className="row-title">{it.role}</h3>
              <p className="row-org">{it.org}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function Contact({ t }) {
  const c = t.contact
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', text: '' })

  const set = (k) => (ev) => setValues((v) => ({ ...v, [k]: ev.target.value }))

  const validate = () => {
    const next = {}
    if (values.name.trim().length < 2) next.name = c.errors.name
    if (!EMAIL_RE.test(values.email.trim())) next.email = c.errors.email
    if (values.message.trim().length < 10) next.message = c.errors.message
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Contato pelo portfólio: ${values.name}`)
      const body = encodeURIComponent(`${values.message}\n\n${values.name} <${values.email}>`)
      window.location.href = `mailto:${SOCIAL.email}?subject=${subject}&body=${body}`
      setStatus({ type: 'info', text: c.fallback })
      return
    }

    setStatus({ type: 'sending', text: c.sending })
    try {
      await emailjs.send(
        serviceId,
        templateId,
        { from_name: values.name.trim(), reply_to: values.email.trim(), message: values.message.trim() },
        { publicKey },
      )
      setStatus({ type: 'ok', text: c.ok })
      setValues({ name: '', email: '', message: '' })
    } catch {
      setStatus({ type: 'error', text: c.fail })
    }
  }

  return (
    <section id="contact" className="section">
      <h2 className="h2 h2-lead">{c.title}</h2>
      <p className="lead">{c.intro}</p>

      <ul className="contact-links">
        {links.map((l) => (
          <li key={l.key}>
            <a href={l.href} target={l.key === 'mail' ? undefined : '_blank'} rel="noreferrer">
              {Icon[l.key]}
              <span>{l.key === 'mail' ? SOCIAL.email : l.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="field">
          <label htmlFor="name">{c.name}</label>
          <input id="name" name="name" autoComplete="name" value={values.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined} />
          {errors.name && <p id="err-name" className="err">{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor="email">{c.email}</label>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined} />
          {errors.email && <p id="err-email" className="err">{errors.email}</p>}
        </div>
        <div className="field">
          <label htmlFor="message">{c.message}</label>
          <textarea id="message" name="message" rows="5" value={values.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined} />
          {errors.message && <p id="err-message" className="err">{errors.message}</p>}
        </div>
        <button className="btn" type="submit" disabled={status.type === 'sending'}>
          {status.type === 'sending' ? c.sending : c.send}
        </button>
        <p className={`status status-${status.type}`} role="status" aria-live="polite">{status.text}</p>
      </form>
    </section>
  )
}

export default function App() {
  const [lang, setLang] = useStoredLang()
  const active = useActiveSection()
  const t = content[lang]

  return (
    <div className="shell">
      <Sidebar t={t} lang={lang} setLang={setLang} active={active} />
      <main className="main">
        <About t={t} />
        <Projects t={t} lang={lang} />
        <Experience t={t} />
        <Contact t={t} />
        <footer className="foot">{t.footer}</footer>
      </main>
    </div>
  )
}
