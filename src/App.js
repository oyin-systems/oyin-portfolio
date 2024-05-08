import React from "react";
//header, nav, about, experience, services, portfolio, contact, footer
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Articles from "./Components/Articles";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import SocialLinks from "./Components/SocialLinks";
import Stack from "./Components/Stack";

function App() {
  return (
    <>
      <Header />
      <Home />
      <SocialLinks />
      <About />
      <Projects />
      <Articles />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
