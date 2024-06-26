import React from "react";
import Navbar from "./component/Navbar/Navbar";
import MainSection from "./component/MainSection";
import Hero from "./component/Hero/Hero";
import Partners from "./component/Partners/Partners";
import Why from "./component/WhySection/Why";

function App() {
  return (
    <div>
      <Navbar />
      <MainSection>
        <Hero />
        <Partners />
      </MainSection>
      <Why />
    </div>
  );
}

export default App;
