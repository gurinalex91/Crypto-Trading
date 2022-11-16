import React from "react";

import {
  Wrap,
  StyledWraper,
  Wrapper,
  AlgoritmElement,
  IconWrap,
  Text,
  Word,
  WordWrap,
} from "./Algoritm.styles";

import { AlgoritmIco } from "../../../../imports";

const Algoritm = () => {
  return (
    <Wrap>
      <StyledWraper>
        <AlgoritmElement marg="0 0 27px" className="first">Artificial Intelligence</AlgoritmElement>
        <AlgoritmElement marg="0 0 27px" className="first-middle">Storage Networks</AlgoritmElement>
        <AlgoritmElement className="first">P2P Networks</AlgoritmElement>
      </StyledWraper>
      <Wrapper>
        <AlgoritmElement marg="0 0 30px" className="second-top">Public Data</AlgoritmElement>
        <AlgoritmElement className="second-bottom">Encrypted Private Data *</AlgoritmElement>
      </Wrapper>
      <StyledWraper className="big" padd="10px 30px 75px">
        <IconWrap>
          <AlgoritmIco />
        </IconWrap>
        <Text>
          Easy to use digital service and exclusive personal service for our
          active traders
        </Text>
        <AlgoritmElement marg="0 0 38px" className="third">Indexing</AlgoritmElement>
        <AlgoritmElement className="third">API</AlgoritmElement>
        <WordWrap>
          <Word>Consumers</Word>
        </WordWrap>
      </StyledWraper>
    </Wrap>
  );
};

export default Algoritm;
