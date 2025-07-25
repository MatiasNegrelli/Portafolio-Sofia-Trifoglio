import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="text-gray-800"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/gplay.png')",
      }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
