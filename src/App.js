import React from "react";

import About from "./components/About/About";
import CardsSection from "./components/CardsSection/CardsSection";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import GlobalStyle, { Background, DecorationRight, DecorationLeft } from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import PlatformDescription from "./components/PlatformDescription/PlatformDescription";

function App() {
  return (
    <Background>
      <GlobalStyle />
      <Navbar />
      <FirstScreen />
      <About />
      <PlatformDescription />
      <CardsSection />
      <DecorationRight />
      <DecorationLeft />
    </Background>
  );
}

export default App;
