// src/components/MyApproach.jsx
import React, { useState, useRef } from "react";
import {
  PencilSquareIcon,
  SparklesIcon,
  VideoCameraIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  MegaphoneIcon,
  StarIcon,
  PencilIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const MyApproach = () => {
  const services = [
    {
      icon: PencilSquareIcon,
      color: "text-pink-500",
      title: "Diseño Creativo de Posts",
      description:
        "Desarrollo publicaciones visualmente atractivas y originales, alineadas con la identidad de tu marca para cada post en redes sociales. Cada diseño capta la atención y comunica tu mensaje de forma efectiva.",
    },
    {
      icon: SparklesIcon,
      color: "text-orange-500",
      title: "Historias Interactivas",
      description:
        "Creo historias dinámicas y atractivas para Instagram y Facebook, utilizando stickers, encuestas, preguntas y llamadas a la acción que aumentan la participación de tu audiencia y dirigen tráfico.",
    },
    {
      icon: VideoCameraIcon,
      color: "text-purple-500",
      title: "Creación de Reels y Videos",
      description:
        "Desde la conceptualización hasta la edición final, produzco contenido de video corto de alto impacto para Reels, TikTok y YouTube Shorts. Incluye edición fluida, música y gráficos que captan la atención.",
    },
    {
      icon: CalendarDaysIcon,
      color: "text-blue-500",
      title: "Calendario Mensual de Contenido",
      description:
        "Elaboración de una planificación detallada y estratégica para tus publicaciones, asegurando una presencia constante y coherente en todas tus plataformas sociales durante todo el mes.",
    },
    {
      icon: UserCircleIcon,
      color: "text-green-500",
      title: "Optimización Estratégica de Biografía",
      description:
        "Revisión y mejora de tu biografía para que sea concisa, atractiva y optimizada con palabras clave relevantes, maximizando la primera impresión y dirigiendo a tus usuarios a acciones clave.",
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      color: "text-red-500",
      title: "Copywriting de Alto Impacto",
      description:
        "Creación de textos persuasivos y creativos para cada post y campaña, diseñados para conectar con tu audiencia, generar interés y motivar a la interacción y conversión.",
    },
    {
      icon: MegaphoneIcon,
      color: "text-yellow-600",
      title: "Planificación y Publicación Continua",
      description:
        "Gestión completa de la programación y publicación de contenido en tus redes sociales, asegurando que tus mensajes lleguen a tu audiencia en el momento óptimo y sin interrupciones.",
    },
    {
      icon: StarIcon,
      color: "text-indigo-500",
      title: "Optimización de Historias Destacadas",
      description:
        "Diseño y organización de tus historias destacadas para que actúen como un 'portafolio' o 'FAQ' visual, proporcionando información clave y aumentando la retención de los usuarios en tu perfil.",
    },
    {
      icon: PencilIcon,
      color: "text-teal-500",
      title: "Edición Profesional de Contenido",
      description:
        "Edición de todo el material visual y audiovisual, ajustando colores, aplicando filtros, mejorando la calidad y asegurando que cada pieza de contenido cumpla con los estándares de tu marca.",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      color: "text-gray-600",
      title: "Gestión Activa de Comentarios",
      description:
        "Monitoreo y respuesta a los comentarios e interacciones de tu audiencia, fomentando la comunidad, resolviendo dudas y manteniendo una comunicación fluida y positiva con tus seguidores.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? services.slice(3).length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === services.slice(3).length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Referencia para obtener el ancho de una tarjeta en tiempo real
  const slideRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  // Efecto para calcular el ancho de la tarjeta cuando el componente se monta o redimensiona
  React.useEffect(() => {
    const updateSlideWidth = () => {
      if (slideRef.current) {
        setSlideWidth(slideRef.current.offsetWidth);
      }
    };

    updateSlideWidth(); // Llamar una vez al montar
    window.addEventListener("resize", updateSlideWidth); // Escuchar cambios de tamaño

    return () => window.removeEventListener("resize", updateSlideWidth); // Limpiar al desmontar
  }, []);

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Mi Enfoque como Community Manager
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Transformo tu presencia digital a través de una gestión estratégica
            y creatividad constante.
          </p>
        </div>

        {/* CONTENEDOR PARA ESCRITORIO (GRID/FLEX) - OCULTO EN MÓVILES */}
        <div className="hidden md:block">
          {/* PRIMERAS 3 TARJETAS CENTRADAS Y DESTACADAS */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-lg">
              {services.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  className={`
                    bg-gradient-to-r from-pink-50/50 to-blue-50/50 p-6 rounded-xl shadow-2xl border border-gray-200
                    hover:shadow-3xl transition-shadow duration-300
                    ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}
                    animate-float
                    ${
                      index === 0
                        ? "delay-0"
                        : index === 1
                        ? "delay-500"
                        : "delay-1000"
                    }
                    w-full
                    md:w-[calc(50%-theme(gap.6)/2)]
                    lg:w-[calc(33.333%-theme(gap.6)*2/3)]
                  `}
                >
                  <div className={`${service.color} mb-3`}>
                    <service.icon className="h-9 w-9" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TARJETAS RESTANTES (DESDE LA 4ª EN ADELANTE) - MÁS HORIZONTALES Y ANCHAS */}
          <div className="flex flex-wrap justify-center gap-6">
            {services.slice(3).map((service, relativeIndex) => {
              const originalIndex = 3 + relativeIndex;
              return (
                <div
                  key={originalIndex}
                  className={`
                    bg-white py-4 px-5 rounded-xl shadow-xl border border-gray-200
                    hover:shadow-2xl transition-shadow duration-300
                    ${originalIndex % 2 === 0 ? "-rotate-1" : "rotate-1"}
                    animate-float
                    ${
                      originalIndex % 3 === 0
                        ? "delay-0"
                        : originalIndex % 3 === 1
                        ? "delay-500"
                        : originalIndex % 3 === 2
                        ? "delay-1000"
                        : ""
                    }
                    w-full
                    md:w-[calc(50%-theme(gap.6)/2)]
                    lg:w-[calc(33.333%-theme(gap.6)*2/3)]
                    xl:w-[calc(33.333%-theme(gap.6)*2/3)]
                    2xl:w-[calc(25%-theme(gap.6)*3/4)]
                  `}
                >
                  <div className={`${service.color} mb-1.5`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-800 mb-0.5">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-tight">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CONTENEDORES PARA MÓVILES - VISIBLES EN MÓVIL */}
        <div className="md:hidden">
          {/* PRIMERAS 3 TARJETAS EN COLUMNA PARA MÓVIL */}
          <div className="flex flex-col items-center gap-6 mb-5">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className={`
                  bg-gradient-to-r from-pink-50/50 to-blue-50/50 p-6 rounded-xl shadow-2xl border border-gray-200
                  ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}
                  animate-float
                  ${
                    index === 0
                      ? "delay-0"
                      : index === 1
                      ? "delay-500"
                      : "delay-1000"
                  }
                  w-full max-w-sm
                `}
              >
                <div className={`${service.color} mb-3`}>
                  <service.icon className="h-9 w-9" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* RESTO DE LAS TARJETAS EN SLIDER PARA MÓVIL */}
          {/* RESTO DE LAS TARJETAS EN SLIDER PARA MÓVIL */}
          <div className="relative max-w-xl mx-auto pt-8">
            <div className="overflow-hidden py-4">
              <div
                className="flex transition-transform ease-out duration-500 gap-6" // Mantenemos gap-6 aquí
                style={{
                  transform: `translateX(calc(-${currentIndex * 100}% - ${
                    currentIndex * 1.5
                  }rem))`, // Ajuste con calc()
                  // El 1.5rem es el equivalente a gap-6. Si usas 'gap-x-6' pon '1.5rem'
                  // Si 'gap-6' se aplica tanto horizontal como verticalmente, entonces sigue siendo '1.5rem' para el horizontal.
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={(e) => (touchEndX.current = e.touches[0].clientX)}
                onTouchEnd={handleTouchEnd}
              >
                {services.slice(3).map((service, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0" // Removido pr-6 de aquí
                  >
                    <div
                      className={`
                        bg-white p-6 rounded-xl border border-gray-200
                        ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}
                        animate-float
                        ${
                          index % 3 === 0
                            ? "delay-0"
                            : index % 3 === 1
                            ? "delay-500"
                            : index % 3 === 2
                            ? "delay-1000"
                            : ""
                        }
                        shadow-md
                        transition-all duration-300 ease-in-out
                      `}
                    >
                      <div className={`${service.color} mb-2`}>
                        <service.icon className="h-8 w-8" />
                      </div>
                      <h4 className="text-base font-semibold text-gray-800 mb-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {services.slice(3).length > 1 && (
              <div className="flex items-center justify-center gap-3 pt-4">
                {services.slice(3).map((_, slideIndex) => (
                  <button
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    aria-label={`Ir a la diapositiva ${slideIndex + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === slideIndex
                        ? "w-4 bg-pink-600"
                        : "w-2 bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyApproach;
