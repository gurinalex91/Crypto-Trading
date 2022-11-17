import React from "react";

import About from "./components/About/About";
import CardsSection from "./components/CardsSection/CardsSection";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import GlobalStyle, { Background, Decoration, DecorationMobile } from "./GlobalStyles";
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
      <Decoration top="28rem" right="-35rem" />
      <Decoration top="80rem" right="55rem"/>
      <DecorationMobile top="-14rem" right="-5rem"/>
      <DecorationMobile top="57rem" right="5rem"/>
      <DecorationMobile top="110rem" right="-20rem" w="650px" h="400px"/>
      <DecorationMobile top="160rem" right="5rem"/>
    </Background>
  );
}

export default App;
