import synand from "../assets/1521H-F.jpg";
export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 pt-24 pb-16 md:px-16">
      
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-green-200/40 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">

        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-green-300 bg-green-100 text-xs font-semibold text-green-700 uppercase tracking-wide">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Disponible pour de nouveaux projets
        </div>

        <div className="flex items-center justify-center gap-6 mb-6">
  
          {/* Avatar */}
          <div className="relative w-40 h-40">
            <img
              src={synand}
              alt="Andoniaina"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
          </div>

          {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Andoniaina<br />
          <span className="text-2xl md:text-4xl font-bold text-gray-700">
            Herilanto Synand Mario
          </span>
        </h1>

        </div>

        {/* Description */}
       <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
        Actuellement en <span className="text-techGreen font-semibold">Master 2 Informatique à l'ENI Fianarantsoa</span>, 
        je me spécialise dans le développement d'applications web modernes et l'administration de réseaux. 
        Fort de stages pratiques en entreprise, je privilégie une méthodologie rigoureuse basée sur un{" "}
        <span className="underline decoration-techGreen decoration-2 underline-offset-4">
          code de qualité et des architectures solides
        </span>.
      </p>

              {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
        <a
  href="#projects"
  className="relative inline-flex items-center justify-center
             w-full sm:w-auto
             px-4 py-3 sm:px-8 sm:py-4
             bg-green-600 rounded-xl
             text-black font-semibold
             shadow-lg
             transition-all duration-300
             hover:-translate-y-1 hover:shadow-xl
             active:translate-y-0
             group
             min-w-[12.5rem]
             text-center
             overflow-hidden"
            
>
  <span className="relative z-10 flex items-center gap-2">
    Voir mes projets
    <svg
      className="w-5 h-5 transition-transform group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>

  <div className="pointer-events-none absolute inset-0 
                  bg-gradient-to-r from-green-600 to-emerald-500 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</a>


          <a
            href="#contact"
            className="relative px-8 py-4 bg-green-600 rounded-xl border-2 border-techGreen bg-transparent 
                      text-techGreen font-semibold transition-all duration-300 
                      hover:bg-techGreen hover:text-black hover:-translate-y-1 
                      hover:shadow-lg active:translate-y-0 group
                      min-w-[12.5rem]
                      text-center
                      "
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Me contacter
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
