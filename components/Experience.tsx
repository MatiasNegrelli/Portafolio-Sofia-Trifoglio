import React from "react";

const Experience = () => {
  const projects = [
    {
      client: "Lopez Inmobiliaria",
      description:
        "Gestión integral de redes sociales para aumentar la visibilidad de propiedades y captar nuevos clientes. Creación de contenido visual atractivo y campañas de segmentación.",
      logoColor: "bg-blue-500",
      image: "/FeedLAPEZ.png",
    },
    {
      client: "Nimai Centro Interdisciplinado",
      description:
        "Desarrollo de una comunidad online, compartiendo contenido de valor sobre terapias y talleres. Estrategia enfocada en generar confianza y posicionar a los profesionales.",
      logoColor: "bg-teal-500",
      image: "/FeedNIMAI.jpg",
    },
    {
      client: "Canycat's Pet Shop",
      description:
        "Rediseño de la identidad visual en Instagram, optimizando la biografía y creando portadas de historias destacadas para mejorar la coherencia de marca y el engagement.",
      logoColor: "bg-amber-500",
      beforeImage: "Bioantes.png",
      afterImage: "/biodespues.png",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Mis Trabajos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Marcas que ya confiaron en mi trabajo.
          </p>
        </div>
        <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="lg:flex lg:flex-row items-center">
                <div className="lg:w-2/5 p-8 lg:p-10">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg ${project.logoColor} flex items-center justify-center mr-4 flex-shrink-0`}
                    >
                      <span className="text-white font-bold text-xl">
                        {project.client.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {project.client}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="lg:w-3/6 p-6 bg-gray-100/60">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Trabajo para ${project.client}`}
                      className="rounded-lg shadow-md w-full object-cover"
                    />
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                      <div>
                        <h4 className="font-bold text-center mb-2 text-gray-500">
                          ANTES
                        </h4>
                        <img
                          src={project.beforeImage}
                          alt={`Antes del trabajo en ${project.client}`}
                          className="rounded-lg shadow-sm w-full object-contain border border-gray-200"
                        />
                      </div>
                      <div className="relative">
                        <div className="absolute -top-3 -right-3 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse z-10">
                          NUEVO
                        </div>
                        <h4 className="font-bold text-center mb-2 text-pink-600">
                          DESPUÉS
                        </h4>
                        <img
                          src={project.afterImage}
                          alt={`Después del trabajo en ${project.client}`}
                          className="rounded-lg shadow-md w-full object-contain border-2 border-pink-400"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
