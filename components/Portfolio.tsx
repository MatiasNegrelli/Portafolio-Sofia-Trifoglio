import React, { useState } from "react";

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
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
    strokeWidth={2}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

const Portfolio = () => {
  const carouselSlides = [
    "/post1.jpg",
    "/post2.jpg",
    "/post3.jpg",
    "/post4.jpg",
    "/post5.jpg",
    "/post6.jpg",
    "/post7.jpg",
    "/post8.jpg",
  ];

  const stories = [
    "/story1.jpg",
    "/story2.jpg",
    "/story3.jpg",
    "/story4.jpg",
    "/story5.jpg",
    "/story6.jpg",
    "/story7.jpg",
    "/story8.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? carouselSlides.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carouselSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="designs" className="py-20 bg-gray-50/50 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Instagram Posts Carousel */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Diseño de Posts para Instagram
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Carruseles y publicaciones que captan la atención y comunican.
            </p>
          </div>

          <div className="max-w-xl mx-auto relative group">
            <div className="aspect-[1/1] w-full bg-white rounded-2xl shadow-lg overflow-hidden relative border">
              <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {carouselSlides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Diseño de post ${index + 1}`}
                    className="w-full flex-shrink-0 object-cover"
                  />
                ))}
              </div>
            </div>
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              aria-label="Anterior"
              className="absolute top-1/2 -translate-y-1/2 left-0 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/60 text-gray-800 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100 hover:!opacity-100 hover:bg-white hover:shadow-md"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              aria-label="Siguiente"
              className="absolute top-1/2 -translate-y-1/2 right-0 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/60 text-gray-800 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-100 hover:!opacity-100 hover:bg-white hover:shadow-md"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            <div className="flex justify-center mt-6 space-x-3">
              {carouselSlides.map((_, slideIndex) => (
                <button
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  aria-label={`Ir a la diapositiva ${slideIndex + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === slideIndex
                      ? "bg-pink-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Instagram Stories */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Diseño de Historias
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Contenido dinámico para mantener a tu audiencia enganchada.
            </p>
          </div>

          <div
            className="group relative w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex w-max animate-scroll-x gap-x-8 py-4">
              {[...stories, ...stories].map((story, index) => (
                <div key={index} className="w-44 sm:w-48 flex-shrink-0">
                  <div className="aspect-[9/16] bg-gray-200 rounded-2xl md:rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100">
                    <img
                      src={story}
                      alt={`Diseño de historia ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
