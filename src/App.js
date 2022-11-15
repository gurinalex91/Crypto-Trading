import React from "react";

import About from "./components/About/About";
import CardsSection from "./components/CardsSection/CardsSection";
import FirstScreen from "./components/FirstScreen/FirstScreen";
import GlobalStyle from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import PlatformDescription from "./components/PlatformDescription/PlatformDescription";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <FirstScreen />
      <About />
      <PlatformDescription />
      <CardsSection />
    </>
  );
}

export default App;
