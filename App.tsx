import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import MyApproach from "./components/MyApproach";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

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
        <MyApproach />
        <Experience />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
