import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

// Custom wrapper component for Typed.js using React Hooks for compatibility
interface TypedEffectProps {
  strings: string[];
  typeSpeed: number;
  backSpeed: number;
  loop: boolean;
}

const TypedEffect: React.FC<TypedEffectProps> = ({
  strings,
  typeSpeed,
  backSpeed,
  loop,
}) => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings,
      typeSpeed,
      backSpeed,
      loop,
    };

    if (el.current) {
      const typed = new Typed(el.current, options);

      return () => {
        // Destroy Typed instance during cleanup to prevent memory leaks
        typed.destroy();
      };
    }
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={el} />;
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 lg:w-3/5 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Transforma tu Marca Online con
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-transparent bg-clip-text">
              <TypedEffect
                strings={["&nbsp;Sofía Trifoglio"]}
                typeSpeed={100}
                backSpeed={60}
                loop={true}
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Como tu Community Manager, potenciaré tu presencia digital con
            estrategias creativas y contenido que conecta.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#services"
              className="bg-gray-900 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all shadow-lg"
            >
              Ver Planes
            </a>
            <a
              href="#contact"
              className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full ring-2 ring-gray-300 hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg"
            >
              Quiero una Asesoría
            </a>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-2/5 flex justify-center">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-60"></div>
            <img
              src="../Public/Foto personal 1.png"
              alt="Sofía Trifoglio"
              className="relative object-cover w-full h-full rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
