import React from "react";
import { PhoneIcon, MailIcon, InstagramIcon, LinkedinIcon } from "./icons";

const About = () => {
  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl lg:flex lg:items-center lg:gap-12"
          style={{
            backgroundImage: `url('https://www.transparenttextures.com/patterns/crissxcross.png')`,
          }}
        >
          <div className="lg:w-1/3 mb-8 lg:mb-0 relative">
            <div className="relative z-10">
              <img
                src="/foto2.png"
                alt="Sofía Trifoglio, Community Manager"
                className="rounded-lg shadow-2xl w-full bg-white bg-opacity-40"
              />
              <div className="absolute -bottom-4 -left-4 z-20 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-md shadow-lg transform -rotate-3">
                <h3 className="text-xl font-bold">Community Manager</h3>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h2 className="font-gochi text-5xl md:text-6xl text-gray-800 mb-4 transform -rotate-2">
              About Me
            </h2>
            <p className="text-2xl font-semibold text-pink-600 mb-4">
              ¡Soy Sofi! :)
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Apasionada de las redes sociales, especialmente Instagram y
              TikTok. Me paso el día buscando nuevas tendencias en diseño. Me
              encantaría formar parte de tu próximo proyecto.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <a
                href="https://wa.me/543513319968?text=Hola%20Sofi!%20Estuve%20viendo%20tu%20portfolio%20y%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20tus%20servicios%20como%20community%20manager.%20Me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20trabaj%C3%A1s,%20qu%C3%A9%20ofrec%C3%A9s%20y%20si%20podemos%20coordinar%20una%20reuni%C3%B3n%20para%20hablar%20m%C3%A1s%20en%20detalle.%20Gracias!"
                target="_blank"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-pink-50 transition-colors"
              >
                <PhoneIcon className="w-7 h-7 text-pink-500" />
                <span>+54 351 331-9968</span>
              </a>
              <a
                href="https://www.instagram.com/sofitrifoglio/"
                target="_blank"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-pink-50 transition-colors"
              >
                <InstagramIcon className="w-5 h-5 text-pink-500" />
                <span>@sofitrifoglio</span>
              </a>
              <a
                href="mailto:sofitrifoglio28@gmail.com"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-pink-50 transition-colors"
              >
                <MailIcon className="w-5 h-5 text-pink-500" />
                <span>sofitrifoglio28@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sof%C3%ADa-trifoglio-908b51355/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-pink-50 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 text-pink-500" />
                <span>Sofía Trifoglio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
