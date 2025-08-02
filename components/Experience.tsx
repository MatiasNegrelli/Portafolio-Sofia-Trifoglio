import React, { useRef, useState, useEffect } from "react";

// --- Start of Icon Components ---
const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    />
  </svg>
);
// --- End of Icon Components ---

// --- Start of Carousel Component ---
interface CarouselProps {
  slides: string[];
  aspectRatio?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  aspectRatio = "aspect-square",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStart(null);
  };

  if (!slides || slides.length === 0) {
    return (
      <div
        className={`w-full ${aspectRatio} bg-gray-200 rounded-lg flex items-center justify-center text-gray-500`}
      >
        No images available
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <div
        className="relative group md:px-16"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={`w-full ${aspectRatio} bg-white rounded-2xl shadow-lg overflow-hidden relative border`}
        >
          <div
            className="flex transition-transform ease-out duration-500 h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full flex-shrink-0 object-cover"
              />
            ))}
          </div>
        </div>
        {slides.length > 1 && (
          <>
            {/* Desktop Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Anterior"
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 z-20 h-14 w-14 items-center justify-center rounded-full bg-black/40 text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-black/50 hover:scale-105 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeftIcon className="h-7 w-7" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Siguiente"
              className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 z-20 h-14 w-14 items-center justify-center rounded-full bg-black/40 text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-black/50 hover:scale-105 opacity-0 group-hover:opacity-100"
            >
              <ChevronRightIcon className="h-7 w-7" />
            </button>
          </>
        )}
      </div>

      {/* Mobile Pagination Dots */}
      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4 md:hidden">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              aria-label={`Ir a la diapositiva ${slideIndex + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === slideIndex
                  ? "w-4 bg-pink-600"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
// --- End of Carousel Component ---

// --- Start of StoryScroller Component ---
const StoryScroller: React.FC<{ stories: string[] }> = ({ stories }) => {
  if (!stories || stories.length === 0) return null;

  // Duplicamos las historias para el bucle infinito
  const storySlides = [...stories, ...stories];

  // Ref para el contenedor animado
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Estado para guardar el ancho calculado (esto es crucial)
  const [scrollerWidth, setScrollerWidth] = useState("auto");

  useEffect(() => {
    if (scrollerRef.current) {
      // Calcular el ancho total de una *sola* colección de historias
      // Multiplicamos por 2 porque duplicamos las historias.
      // El 50% de -translateX(-50%) se refiere al 50% del *ancho total de storySlides*.
      // Si el ancho total de storySlides es X, entonces el -50% es X/2.
      // Queremos que X/2 sea el ancho de la colección original.
      // Así que el ancho total de storySlides debe ser el doble de la colección original.

      // Obtener todos los elementos individuales de las historias
      const storyElements = Array.from(scrollerRef.current.children);
      if (storyElements.length > 0) {
        let totalOriginalWidth = 0;
        // Calcular el ancho de la primera mitad de los elementos (la colección original)
        // Iteramos solo sobre la mitad de los elementos porque `storySlides` los duplica
        for (let i = 0; i < stories.length; i++) {
          const element = storyElements[i] as HTMLElement;
          totalOriginalWidth += element.offsetWidth; // Ancho del elemento individual
          // Sumar el espacio entre elementos (space-x-6 en Tailwind es 1.5rem = 24px)
          if (i < stories.length - 1) {
            totalOriginalWidth += 24; // Tailwind space-x-6 = 24px
          }
        }
        // El ancho del contenedor .animate-scroll-x debe ser el doble del ancho original.
        setScrollerWidth(`${totalOriginalWidth * 2}px`);
      }
    }
  }, [stories]); // Recalcular si las historias cambian

  return (
    <div className="relative w-full overflow-hidden group py-4" tabIndex={0}>
      {/* Aplicamos el ancho calculado aquí */}
      <div
        ref={scrollerRef}
        className="flex animate-scroll-x space-x-6"
        style={{ width: scrollerWidth }}
      >
        {storySlides.map((story, index) => (
          <div key={index} className="flex-shrink-0">
            <div className="w-[180px] h-[320px] sm:w-[250px] sm:h-[445px] p-1.5 bg-neutral-800 rounded-3xl shadow-lg">
              <div className="w-full h-full bg-black rounded-[20px]">
                <img
                  src={story}
                  className="w-full h-full object-cover rounded-[20px]"
                  alt={`Story ${(index % stories.length) + 1}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
    </div>
  );
};
// --- End of StoryScroller Component ---

// --- Start of CollapsibleSection Component ---
const CollapsibleSection: React.FC<{
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-gray-200 last-of-type:border-b-0">
      <h4 className="py-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center text-left text-xl font-bold text-gray-700 hover:text-pink-600 transition-colors py-4"
          aria-expanded={isOpen}
          aria-controls={`section-${title}`}
        >
          <span>{title}</span>
          <ChevronDownIcon
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h4>
      <div
        id={`section-${title}`}
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
};
// --- End of CollapsibleSection Component ---

const projects = [
  {
    client: "Lapez Inmobiliaria",
    shortDescription:
      "Gestión integral de redes sociales para aumentar la visibilidad de propiedades y captar nuevos clientes. Creación de contenido visual atractivo y campañas de segmentación.",
    description:
      "Llevamos a cabo una gestión integral de las redes sociales para Lapez Inmobiliaria, con el objetivo de maximizar la visibilidad de sus propiedades y atraer a potenciales compradores e inquilinos. Nuestra estrategia incluyó la creación de contenido visual de alta calidad, como recorridos en video y fotografías profesionales, junto con la ejecución de campañas publicitarias altamente segmentadas en plataformas clave para alcanzar al público adecuado.",
    logoColor: "bg-blue-500",
    mainImage: "/Lapez/FeedLAPEZ.png",
    posts: ["/img.png", "/img.png", "/img.png"],
    stories: [
      "/Lapez/story1.jpg",
      "/Lapez/story2.jpg",
      "/Lapez/story3.jpg",
      "/Lapez/story1.jpg",
      "/Lapez/story2.jpg",
      "/Lapez/story3.jpg",
    ],
    videoUrls: [
      "https://www.youtube.com/embed/9Awe4Ep_JIQ",
      "https://youtube.com/embed/j-_4bs3s80A",
      "https://youtube.com/embed/4bX1d0MMecI",
    ],
  },
  {
    client: "Nimai Centro Interdisciplinado",
    shortDescription:
      "Desarrollo de una comunidad online, compartiendo contenido de valor sobre terapias y talleres. Estrategia enfocada en generar confianza y posicionar a los profesionales.",
    description:
      "Para Nimai, nuestro enfoque fue construir y nutrir una comunidad online sólida. Desarrollamos una estrategia de contenido centrada en compartir información valiosa sobre terapias, bienestar y talleres. El objetivo principal fue generar un espacio de confianza y diálogo, posicionando a los profesionales del centro como referentes en su campo y fortaleciendo la relación con su audiencia.",
    logoColor: "bg-teal-500",
    mainImage: "/Nimai/FeedNIMAI.jpg",
    posts: ["/img.png", "/img.png", "/img.png"],
    stories: [
      "/Nimai/story1.jpg",
      "/Nimai/story2.jpg",
      "/Nimai/story3.jpg",
      "/Nimai/story4.jpg",
      "/Nimai/story5.jpg",
      "/Nimai/story6.jpg",
      "/Nimai/story7.jpg",
      "/Nimai/story8.jpg",
    ],
    videoUrls: [
      "https://youtube.com/embed/RTBdHvzS4Is",
      "https://youtube.com/embed/xKS-C6jmmkM",
      "https://youtube.com/embed/TYNVeYU_V-w",
    ],
  },
  {
    client: "Canycat's Pet Shop",
    shortDescription:
      "Rediseño de la identidad visual en Instagram, optimizando la biografía y creando portadas de historias destacadas para mejorar la coherencia de marca y el engagement.",
    description:
      "Realizamos un completo rediseño de la identidad visual de Canycat's en Instagram para reflejar su personalidad divertida y amigable. Este trabajo incluyó la optimización de la biografía para una comunicación más clara, y la creación de un sistema de portadas para las historias destacadas que no solo organiza la información, sino que también refuerza la coherencia de la marca, mejorando significativamente el engagement con sus seguidores.",
    logoColor: "bg-amber-500",
    mainImage: "/Canycat/FeedCANYCAT.jpg",
    posts: [
      "/Canycat/carrusel1.png",
      "/Canycat/carrusel2.png",
      "/Canycat/carrusel3.png",
      "/Canycat/carrusel4.png",
      "/Canycat/carrusel5.png",
    ],
    stories: [
      "/Canycat/story1.png",
      "/Canycat/story2.png",
      "/Canycat/story3.png",
      "/Canycat/story4.png",
      "/Canycat/story5.png",
      "/Canycat/story6.png",
      "/Canycat/story7.png",
      "/Canycat/story8.png",
    ],
    videoUrls: [
      "https://youtube.com/embed/WYaCfGT8YcI",
      "https://youtube.com/embed/hsYbFUEcppg",
      "https://youtube.com/embed/-Ygbos5J9OM",
    ],
  },
];

const Experience = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Portafolio de Trabajos
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Una muestra de cómo he ayudado a las marcas a crecer.
          </p>
        </div>
        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* --- TOP SECTION: INFO + IMAGE --- */}
              <div className="p-8 lg:p-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                  {/* Left Column: Info */}
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg ${project.logoColor} flex items-center justify-center mr-4 flex-shrink-0`}
                      >
                        <span className="text-white font-bold text-xl">
                          {project.client.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                        {project.client}
                      </h3>
                    </div>
                    <div className="lg:flex-grow lg:flex lg:items-center">
                      <p className="text-gray-600 leading-relaxed block lg:hidden">
                        {project.shortDescription}
                      </p>
                      <p className="text-gray-600 leading-relaxed hidden lg:block">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Desktop Image */}
                  <div className="hidden lg:flex lg:items-center">
                    <img
                      src={project.mainImage}
                      alt={`Imagen principal del proyecto ${project.client}`}
                      className="rounded-xl shadow-lg object-cover w-full aspect-[4/3]"
                    />
                  </div>
                </div>

                {/* --- Mobile-only Image --- */}
                <div className="lg:hidden mt-8 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={project.mainImage}
                    alt={`Imagen principal del proyecto ${project.client}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* --- BOTTOM SECTION: COLLAPSIBLES --- */}
              <div className="bg-gray-50/70 border-t border-gray-200">
                <div className="px-8 lg:px-10">
                  <CollapsibleSection title="Diseño de Posts">
                    <Carousel
                      slides={project.posts}
                      aspectRatio="aspect-square"
                    />
                  </CollapsibleSection>

                  <CollapsibleSection title="Diseño de Historias">
                    <StoryScroller stories={project.stories} />
                  </CollapsibleSection>
                  <CollapsibleSection title="Reels / Videos">
                    {/* Mobile: solo 1 video */}
                    <div className="sm:hidden w-full max-w-xs mx-auto bg-black rounded-2xl overflow-hidden shadow-lg border">
                      <iframe
                        src={project.videoUrls[0]}
                        title={`Video para ${project.client}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full aspect-[2/3]"
                      ></iframe>
                    </div>

                    {/* Desktop: múltiples videos en grilla */}
                    <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                      {project.videoUrls.map((url, idx) => (
                        <div
                          key={idx}
                          className="w-full max-w-xs bg-black rounded-2xl overflow-hidden shadow-lg border aspect-[2/3]"
                        >
                          <iframe
                            src={url}
                            title={`Video ${idx + 1} de ${project.client}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      ))}
                    </div>
                  </CollapsibleSection>
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
