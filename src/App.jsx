import React from "react";
import Navbar from "./component/Navbar/Navbar";
import MainSection from "./component/MainSection";
import Hero from "./component/Hero/Hero";
import Partners from "./component/Partners/Partners";
import Why from "./component/WhySection/Why";
import Features from "./component/Valutico features/Features";

function App() {
  return (
    <div>
      <Navbar />
      <MainSection>
        <Hero />
        <Partners />
      </MainSection>
      <Why />
      <MainSection>
        <Features />
      </MainSection>
    </div>
  );
}

export default App;
