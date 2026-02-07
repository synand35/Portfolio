export default function About() {
  const stats = [
    { 
      value: "10+", 
      label: "Projets réalisés",
      icon: "🚀",
      description: "Applications web & solutions complètes"
    },
    { 
      value: "3+", 
      label: "Années d'expérience",
      icon: "💼",
      description: "Stages & projets professionnels"
    },
    { 
      value: "100%", 
      label: "Satisfaction client",
      icon: "⭐",
      description: "Projets livrés avec succès"
    },
    { 
      value: "Master 2", 
      label: "Informatique",
      icon: "🎓",
      description: "ENI Fianarantsoa"
    }
  ];

  return (
    <section id="about" className="py-16 px-4 md:px-8 lg:px-16 max-w-8xl mx-auto">
      {/* En-tête simplifiée */}
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-8 md:w-12 h-0.5 bg-techGreen"></div>
          <span className="text-xs md:text-sm uppercase tracking-wider text-techGreen font-semibold">
            À propos
          </span>
          <div className="w-8 md:w-12 h-0.5 bg-techGreen"></div>
        </div>
     
        {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Passionné par l'<span className="text-techGreen">innovation</span> digitale
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto px-4">
          Développeur Fullstack & Administrateur Réseaux
        </p> */}
      </div>
             <br />
      {/* Contenu principal - Layout simplifié */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Partie gauche - Texte */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-techGreen/20 to-emerald-400/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl md:text-3xl">👨‍💻</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">
                  Étudiant en Master 2 Informatique
                </h3>
                <p className="text-techGreen font-medium text-sm md:text-base">ENI Fianarantsoa</p>
              </div>
            </div>
          <br />
            <div className="space-y-4 md:space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                Passionné par le <strong className="text-gray-900">développement web</strong> et 
                les <strong className="text-gray-900">systèmes réseaux</strong>, je combine une expertise technique 
                solide avec une approche pragmatique pour résoudre des problèmes complexes.
              </p>
              
              <p>
                Fort d'expériences en entreprise dans le cadre de stages pratiques, 
                je maîtrise aussi bien les <span className="text-techGreen font-medium">technologies de programmation</span> que 
                l'<span className="text-techGreen font-medium">administration réseau</span>.
              </p>
              
              <div className="p-4 md:p-6 bg-gradient-to-r from-gray-50 to-white rounded-lg md:rounded-xl border-l-4 border-techGreen">
                <p className="text-gray-800 italic text-sm md:text-base">
                  "Mon approche repose sur trois piliers : 
                  <span className="text-techGreen font-semibold"> l'efficacité</span>, 
                  <span className="text-techGreen font-semibold"> la qualité</span>, et 
                  <span className="text-techGreen font-semibold"> l'évolutivité</span>."
                </p>
              </div>
              
              <p>
                <strong className="text-gray-900">Sérieux, curieux et autonome</strong>, je suis motivé à rejoindre 
                un environnement dynamique pour mettre en œuvre mes compétences et contribuer activement 
                au succès de vos projets innovants.
              </p>
            </div>
          </div><br />

          {/* Timeline académique - Déplacée ici */}
          <div className="mt-8 md:mt-12 bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
              Parcours académique
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg md:rounded-xl">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">🎓</div>
                <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Master 2 Informatique</h4>
                <p className="text-techGreen font-medium mb-1 md:mb-2 text-xs md:text-sm">ENI Fianarantsoa</p>
                <p className="text-gray-600 text-xs md:text-sm">2023 - 2024</p>
              </div>
              
              <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg md:rounded-xl">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">💼</div>
                <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Expérience professionnelle</h4>
                <p className="text-techGreen font-medium mb-1 md:mb-2 text-xs md:text-sm">Stages & Projets</p>
                <p className="text-gray-600 text-xs md:text-sm">3+ années cumulées</p>
              </div>
              
              <div className="text-center p-4 md:p-6 bg-gray-50 rounded-lg md:rounded-xl">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">🌍</div>
                <h4 className="font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Expertise technique</h4>
                <p className="text-techGreen font-medium mb-1 md:mb-2 text-xs md:text-sm">Fullstack & Réseaux</p>
                <p className="text-gray-600 text-xs md:text-sm">Double compétence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partie droite - Stats et CTA */}
        <div className="lg:w-1/3 space-y-6 md:space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm hover:shadow 
                         border border-gray-100 hover:border-techGreen/30 
                         transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-techGreen/10 flex items-center justify-center 
                                group-hover:bg-techGreen/20 transition-colors">
                    <span className="text-xl md:text-2xl">{stat.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
            <br />
          {/* Carte Compétences */}
          <div className="bg-gradient-to-br from-gray-900 to-techGreen rounded-xl md:rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Double expertise</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg md:text-xl">🌐</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1 text-sm md:text-base">Développement Fullstack</h4>
                  <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                    Applications web modernes, interfaces utilisateur, APIs robustes
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg md:text-xl">🔧</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold mb-1 text-sm md:text-base">Administration Réseaux</h4>
                  <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                    Configuration, maintenance et sécurisation des infrastructures réseau
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Professionnel */}
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                Prêt à collaborer ?
              </h3>
              <p className="text-gray-600 mb-6 md:mb-8 max-w-md mx-auto text-sm md:text-base">
                Discutons de votre projet ou opportunité
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <a
                  href="#contact"
                  className="px-6 py-3 md:px-8 md:py-4 bg-techGreen text-white font-semibold rounded-lg md:rounded-xl 
                           hover:bg-green-600 transition-all duration-300 
                           hover:shadow hover:-translate-y-0.5 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base"
                >
                  <span>Discuter d'un projet</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
                
                <a
                  href="#projects"
                  className="px-6 py-3 md:px-8 md:py-4 bg-white border border-techGreen text-techGreen 
                           font-semibold rounded-lg md:rounded-xl hover:bg-techGreen hover:text-white 
                           transition-all duration-300 hover:shadow hover:-translate-y-0.5 
                           flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base"
                >
                  <span>Voir mes réalisations</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </a>
              </div>
              
              <p className="text-xs md:text-sm text-gray-500 mt-4 md:mt-6">
                Réponse sous <strong>24 heures</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}