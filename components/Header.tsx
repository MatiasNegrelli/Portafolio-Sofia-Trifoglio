import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "Sobre Mí" },
    { href: "#services", label: "Servicios" },
    { href: "#portfolio", label: "Portafolio" },
    { href: "#plans", label: "Planes" },
    { href: "#contact", label: "Contacto" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      const headerOffset = 80; // Account for sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white/90 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={scrollToTop}
          className="text-xl font-bold text-gray-800 hover:text-pink-600 transition-colors"
        >
          Sofía Trifoglio
        </a>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {/* CAMBIO: Reducido space-x-8 a space-x-4 para los enlaces del menú */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-600 hover:text-pink-600 font-medium transition-colors whitespace-nowrap"
              // Agregado whitespace-nowrap para evitar saltos de línea inesperados
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* El botón "Contratar" está fuera del nav para que quede a la derecha */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="hidden md:inline-block bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-2 px-6 rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
        >
          Contratar
        </a>
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 border-t border-gray-200" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center space-y-2 p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="py-2 text-lg text-gray-700 hover:text-pink-600 transition-colors w-full text-center rounded-md hover:bg-gray-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Contratar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;