export default function Contact() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/synand35',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.727-4.033-1.416-4.033-1.416-.545-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.106-.775.418-1.305.762-1.604-2.665-.305-5.466-1.334-5.466-5.93 0-1.312.469-2.382 1.236-3.222-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 6.844c1.02.005 2.047.138 3.006.404 2.292-1.552 3.299-1.23 3.299-1.23.653 1.653.241 2.874.118 3.176.768.84 1.235 1.91 1.235 3.222 0 4.608-2.804 5.624-5.476 5.92.43.372.823 1.103.823 2.223v3.293c0 .319.192.688.8.576C20.566 21.799 24 17.302 24 12c0-6.627-5.373-12-12-12Z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/username',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.854 0-2.137 1.445-2.137 2.939v5.667H9.351V9h3.414v1.561h.045c.477-.9 1.637-1.85 3.37-1.85 3.602 0 4.268 2.37 4.268 5.455v6.286ZM5.337 7.433A2.065 2.065 0 1 1 5.337 3.3a2.065 2.065 0 0 1 0 4.133ZM7.12 20.452H3.555V9H7.12v11.452ZM22.225 0H1.771A1.77 1.77 0 0 0 0 1.729v20.542A1.77 1.77 0 0 0 1.771 24h20.454A1.77 1.77 0 0 0 24 22.271V1.729A1.77 1.77 0 0 0 22.225 0Z" />
        </svg>
      )
    },
    {
      name: 'X',
      url: 'https://twitter.com/username',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.828L0 1.153h7.594l5.243 6.932L18.9 1.153Zm-1.29 19.497h2.039L6.486 3.237H4.298L17.611 20.65Z" />
        </svg>
      )
    }
  ];

  const contactCards = [
    {
      label: 'Email',
      value: 'andoniainasynand@gmail.com',
      href: 'mailto:andoniainasynand@gmail.com',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8 10.89 13.26a2 2 0 0 0 2.22 0L21 8m-16 11h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
          />
        </svg>
      )
    },
    {
      label: 'Localisation',
      value: 'Antananarivo, Madagascar',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      )
    },
    {
      label: 'Telephone',
      value: '034 48 580 49 / 033 13 456 18',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 0 1 2-2h2.28a2 2 0 0 1 1.95 1.56l.57 2.49a2 2 0 0 1-.58 1.89l-1.27 1.27a16 16 0 0 0 6.78 6.78l1.27-1.27a2 2 0 0 1 1.89-.58l2.49.57A2 2 0 0 1 21 16.72V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6V5Z"
          />
        </svg>
      )
    },
    {
      label: 'Disponibilite',
      value: 'Reponse habituelle sous 24h',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="section-wrap bg-slate-50">
      <div className="section-content w-full max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Prendre contact</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Discutons de votre projet ou echangeons autour d&apos;une passion commune.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-techGreen"></div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1.3fr]">
          <aside className="rounded-3xl bg-gradient-to-br from-emerald-600 via-techGreen to-emerald-500 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold text-center">Informations de contact</h3>
            <p className="mt-2 text-sm text-emerald-50/90">
              Je suis ouvert aux missions freelance, collaborations et opportunites pro.
            </p>

            <div className="mt-8 space-y-4">
              {contactCards.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-emerald-100">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-white hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="mb-3 text-sm font-medium text-emerald-100">Suivez-moi</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition hover:-translate-y-0.5 hover:bg-white/30"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 text-center leading-relaxed">Envoyez un message</h3>
            <p className="mt-3 max-w-lg text-gray-600 leading-relaxed">
              Vous avez une idee de projet en tete ? Je serais ravi d&apos;en discuter et de voir comment je peux contribuer.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Langues</p>
                <p className="mt-2 font-medium text-gray-900">Malagasy, Francais</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Fuseau</p>
                <p className="mt-2 font-medium text-gray-900">UTC +3 (Antananarivo)</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:andoniaina@email.com"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
              >
                Contacter par email
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
              >
                Voir mes projets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
