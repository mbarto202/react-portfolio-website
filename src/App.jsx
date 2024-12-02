import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Services from "./components/services/Services";
import SuccessStories from "./components/successStories/SuccessStories"; // Combined section
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

// Main App component
const App = () => {
  return (
    <>
      <Header />  
      <Nav />
      <main>
        <About />
        <Services />
        <SuccessStories />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
