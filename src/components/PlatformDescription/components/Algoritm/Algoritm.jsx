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
  AlgoritmElementWrap,
  AlgoritmElementsWrap,
} from "./Algoritm.styles";

import { AlgoritmIco } from "../../../../imports";

const Algoritm = () => {
  return (
    <Wrap>
      <StyledWraper>
        <AlgoritmElement marg="0 0 27px" className="first first-left">
          Artificial Intelligence
        </AlgoritmElement>
        <AlgoritmElement
          marg="0 0 27px"
          className="first first-middle first-right"
        >
          Storage Networks
        </AlgoritmElement>
        <AlgoritmElementWrap>
          <AlgoritmElement className="first mobile-middle">
            P2P Networks
          </AlgoritmElement>
        </AlgoritmElementWrap>
      </StyledWraper>
      <Wrapper>
        <AlgoritmElement marg="0 0 30px" className="second second-top">
          Public Data
        </AlgoritmElement>
        <AlgoritmElement className="second second-bottom">
          Encrypted Private Data *
        </AlgoritmElement>
      </Wrapper>
      <StyledWraper className="big" padd="10px 30px 75px">
        <IconWrap>
          <AlgoritmIco />
        </IconWrap>
        <Text>
          Easy to use digital service and exclusive personal service for our
          active traders
        </Text>
        <AlgoritmElementsWrap>
          <AlgoritmElement marg="0 auto 38px" className="third">
            Indexing
          </AlgoritmElement>
          <AlgoritmElement className="third" marg="0 auto">API</AlgoritmElement>
        </AlgoritmElementsWrap>
        <WordWrap>
          <Word>Consumers</Word>
        </WordWrap>
      </StyledWraper>
    </Wrap>
  );
};

export default Algoritm;
