const skills = {
  Frontend: ['React', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express', 'Python', 'REST APIs', 'Authentication'],
  DevOps: ['Docker', 'Git', 'CI/CD', 'AWS'],
  Databases: ['SQLite', 'PostgreSQL'],
  Conception: ['UML', 'Merise', 'Figma (prototypage IHM)'],
};

export default function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <div className="section-content">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Compétences techniques
        </h2>
        <p className="text-gray-600">Technologies et outils que j'utilise au quotidien</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div 
            key={category}
            className="bg-white rounded-xl p-6 border border-gray-200 
                     hover:border-techGreen hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-techGreen">
                  {category === 'Frontend' && '🖥️'}
                  {category === 'Backend' && '⚙️'}
                  {category === 'DevOps' && '🚀'}
                  {category === 'Databases' && '🗄️'}
                  {category === 'Conception' && '📐'}
                </span>
                {category}
              </h3>
              <div className="w-12 h-1 bg-techGreen"></div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg 
                           hover:bg-techGreen hover:text-white transition-all duration-300 
                           cursor-default text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
