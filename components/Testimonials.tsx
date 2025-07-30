import React from "react";
import { HeartIcon } from "./icons";

const Testimonials = () => {
  const testimonials = [
    "Sos muy buena en esto Sofiaaa 👏👏👏",
    "Que abuso me encantó",
    "Muy bueno el video Sofi",
    "Hola sofi!! Que bueno el video de los bloopers un montón de gente me dijo algo de eso!!",
    "Sofi muy bueno el video me encantó",
    "Hola sofi, Me encanta!!!",
    "Que buenas quedan las publicaciones, historias etc!!! Sos una genia!! Gracias",
    "Na sofi tremendo está, Muy bueno",
    "Sofi muchas gracias hoy estuvo muy bueno",
    "Buena tu idea de por si tuvo muchas visualizaciones y 3 ventas en 4 días pero no consigo el producto",
  ];

  return (
    <section
      id="testimonials"
      className="py-20 relative overflow-hidden bg-gray-50/50"
    >
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-[30rem] h-[30rem] bg-pink-100 rounded-full blur-3xl opacity-60 z-0"></div>
      <div className="absolute top-0 right-0 translate-y-1/4 -translate-x-1/4 w-[25rem] h-[25rem] bg-orange-100 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Mensajes que me inspiran
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Pequeños fragmentos de la increíble confianza y el cariño de mis
            clientes.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`
                break-inside-avoid bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/80
                transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pink-100 hover:border-pink-300
                /* Aplicamos la clase CSS de la animación */
                testimonial-float
                /* Aplicamos la clase de retraso escalonado */
                ${
                  index % 3 === 0
                    ? "testimonial-delay-0"
                    : index % 3 === 1
                    ? "testimonial-delay-1"
                    : "testimonial-delay-2"
                }
              `}
            >
              <div className="flex gap-4 items-start">
                <div className="text-pink-400 flex-shrink-0 mt-1">
                  <HeartIcon className="w-5 h-5" />
                </div>
                <p className="text-gray-700 leading-relaxed">{testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;