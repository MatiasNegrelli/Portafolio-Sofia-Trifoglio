import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent">
      <div className="container mx-auto px-6 py-6 text-center text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} Sofía Trifoglio. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
