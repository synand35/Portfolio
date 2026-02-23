const projects = [
  {
    name: 'School Management App',
    desc: 'Application web complète pour la gestion des classes, étudiants et notes avec interface administrateur et tableau de bord analytique.',
    tech: ['React', 'Node.js', 'SQLite', 'Docker'],
    github: '#',
    demo: '#',
    image: '📚', // Vous pouvez remplacer par une vraie image
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Network Monitoring Tool',
    desc: 'Outil de surveillance réseau en temps réel avec visualisation des données de bande passante et alertes automatiques.',
    tech: ['Python', 'SQLite', 'Chart.js', 'Flask'],
    github: '#',
    demo: '#',
    image: '🌐',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Dashboard UI',
    desc: 'Tableau de bord admin moderne avec design responsive, composants interactifs et visualisation de données en temps réel.',
    tech: ['React', 'Tailwind CSS', 'Recharts', 'Context API'],
    github: '#',
    demo: '#',
    image: '📊',
    color: 'from-purple-500 to-pink-500'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <div className="section-content">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Mes <span className="text-techGreen">Projets</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-6xl mx-auto">
          Découvrez mes réalisations techniques et les solutions innovantes que j'ai développées
        </p>
        <div className="w-24 h-1 bg-techGreen mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.name}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                     transition-all duration-500 border border-gray-100 hover:border-techGreen/20"
          >
            {/* Header avec gradient */}
            <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl opacity-30">{project.image}</span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                  {project.tech[0]}
                </span>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-techGreen transition-colors">
                {project.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.desc}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full 
                             hover:bg-techGreen/10 hover:text-techGreen transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Boutons */}
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <a
                  href={project.github}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                           bg-gray-900 text-white rounded-lg hover:bg-black transition-all 
                           group/btn"
                >
                  <span>Code</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </a>
                
                <a
                  href={project.demo}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                           bg-green-600 text-white rounded-lg hover:bg-green-600 transition-all 
                           group/btn"
                >
                  <span>Démo</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton Voir plus */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl 
                   border-2 border-techGreen text-techGreen font-semibold 
                   hover:bg-techGreen hover:text-white transition-all duration-300"
        >
          Voir tous les projets
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
      </div>
    </section>
  );
}
