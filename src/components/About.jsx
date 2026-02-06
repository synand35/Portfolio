export default function About() {
  const stats = [
    { value: "10+", label: "Projets réalisés" },
    { value: "3+", label: "Années d'expérience" },
    { value: "100%", label: "Satisfaction client" },
    { value: "∞", label: "Envie d'apprendre" }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Partie gauche */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mon <span className="text-techGreen">parcours</span> et ma passion
          </h2>
          
          <div className="space-y-6 text-gray-700 text-lg">
            <p>
              En tant que <strong>Développeur Fullstack</strong>, j'ai eu l'opportunité 
              de travailler sur divers projets allant des applications web complexes 
              aux solutions backend robustes.
            </p>
            
            <p>
              Ma philosophie de développement repose sur trois piliers : 
              <span className="text-techGreen font-medium"> l'efficacité</span>, 
              <span className="text-techGreen font-medium"> la qualité</span>, et 
              <span className="text-techGreen font-medium"> l'évolutivité</span>.
            </p>
            
            <p>
              Je crois en l'importance d'un code bien structuré, testé et documenté, 
              non seulement pour le fonctionnement immédiat, mais aussi pour la 
              maintenance à long terme.
            </p>
          </div>

          {/* Bouton ou lien */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 
                     bg-techGreen text-white rounded-lg hover:bg-green-600 
                     transition duration-300 font-medium"
          >
            Discutons de votre projet
            <span className="text-xl">→</span>
          </a>
        </div>

        {/* Partie droite - Stats */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 
                         hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-techGreen mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Citation */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 italic text-center">
              "Chaque ligne de code est une opportunité d'apprendre, 
              d'améliorer et d'innover."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}