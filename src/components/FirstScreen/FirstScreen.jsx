import React from "react";
import { Container, SectionTitle } from "../../GlobalStyles";
import { MouseIco } from "../../imports";
import Algoritm from "./components/Algoritm/Algoritm";

import {
  Background,
  MainTitle,
  MainText,
  TextBlock,
  MainButton,
  MouseIcoWrapper,
  MouseLink,
} from "./FirstScreen.styles";

const FirstScreen = () => {
  return (
    <Background>
      <Container>
        <SectionTitle marg="0 0 32px 0">crypto trading</SectionTitle>
        <TextBlock>
          <MainTitle>
            Engineers Meet
            <br />
            <span>Traders __</span>
          </MainTitle>
          <MainText>
            Advanced crypto algorithmic trading and efficient cross-chain
            execution, at scale.
          </MainText>
        </TextBlock>
        <MainButton>Learn More</MainButton>
      </Container>
      <Algoritm />
      <MouseIcoWrapper>
        <MouseLink href="#about">
          <MouseIco />
        </MouseLink>
      </MouseIcoWrapper>
    </Background>
  );
};
export default FirstScreen;
