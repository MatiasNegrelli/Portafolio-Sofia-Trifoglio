import React from "react";
import { PhoneIcon, MailIcon, InstagramIcon, LinkedinIcon } from "./icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            ¿Listo para impulsar tu marca?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            ¡Hablemos de tu proyecto! Contáctame a través de los siguientes
            canales y comencemos a crear algo increíble juntos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
          <div className="w-full flex flex-col sm:flex-row gap-6">
            <a
              href="https://wa.me/543513319968"
              className="group flex-1 bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-pink-500 hover:bg-gray-800 transition-all duration-300 flex items-center gap-5"
            >
              <div className="bg-gradient-to-br from-pink-500 to-orange-400 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <PhoneIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Teléfono</h3>
                <p className="text-gray-400 group-hover:text-pink-300 transition-colors duration-300">
                  +54 351 331-9968
                </p>
              </div>
            </a>
            <a
              href="mailto:sofitrifoglio28@gmail.com"
              className="group flex-1 bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-pink-500 hover:bg-gray-800 transition-all duration-300 flex items-center gap-5"
            >
              <div className="bg-gradient-to-br from-pink-500 to-orange-400 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                <MailIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Email</h3>
                <p className="text-gray-400 group-hover:text-pink-300 transition-colors duration-300">
                  sofitrifoglio28@gmail.com
                </p>
              </div>
            </a>
          </div>

          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold mb-6">Sígueme en mis redes</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com/sofitrifoglio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Sofía Trifoglio"
                className="group p-4 bg-gray-800 rounded-full hover:bg-gradient-to-br from-pink-500 to-orange-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink-500/30"
              >
                <InstagramIcon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://www.linkedin.com/in/sof%C3%ADa-trifoglio-908b51355/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Sofía Trifoglio"
                className="group p-4 bg-gray-800 rounded-full hover:bg-gradient-to-br from-blue-500 to-cyan-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30"
              >
                <LinkedinIcon className="w-8 h-8 text-white transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
