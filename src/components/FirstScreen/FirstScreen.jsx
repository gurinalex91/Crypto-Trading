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
        <TextBlock
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <MainTitle>
            Engineers Meet <span>Traders __</span>
          </MainTitle>
          <MainText>
            Advanced crypto algorithmic trading and efficient cross-chain
            execution, at scale.
          </MainText>
        </TextBlock>
        <MainButton
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Learn More
        </MainButton>
      </Container>
      <Algoritm />
      <MouseIcoWrapper
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <MouseLink href="#about">
          <MouseIco />
        </MouseLink>
      </MouseIcoWrapper>
    </Wrapper>
  );
};
export default FirstScreen;
