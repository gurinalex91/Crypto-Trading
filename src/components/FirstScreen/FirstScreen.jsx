import React from "react";
import { Container, SectionTitle } from "../../GlobalStyles";
import { MouseIco } from "../../imports";
import Algoritm from "./components/Algoritm/Algoritm";

import {
  Wrapper,
  MainTitle,
  MainText,
  TextBlock,
  MainButton,
  MouseIcoWrapper,
  MouseLink,
} from "./FirstScreen.styles";

const FirstScreen = () => {
  return (
    <Wrapper>
      <Container>
        <SectionTitle marg="0 0 32px 0" textAlign="left">
          crypto trading
        </SectionTitle>
        <TextBlock>
          <MainTitle>
            Engineers Meet{" "}
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
    </Wrapper>
  );
};
export default FirstScreen;
