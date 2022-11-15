import React from "react";
import { Container, SectionWrap, Text, Title } from "../../GlobalStyles";
import Algoritm from "./components/Algoritm/Algoritm";

import {
  TextBlock,
  ImageBlock,
  Link,
  Wrapper,
} from "./PlatformDescription.styles";

const PlatformDescription = () => {
  return (
    <SectionWrap>
      <Container>
        <Wrapper>
          <TextBlock>
            <Title  fs="35px">
              The future <span>of </span>Cryptocurrency trading{" "}
              <span className="colored">platform</span>
            </Title>
            <Text>
              Take advantage of time and sales, futures spread orders and depth
              trader — plus, trade directly from charts.
            </Text>
            <Link href="#">Learn more</Link>
          </TextBlock>
          <ImageBlock>
            <Algoritm />
          </ImageBlock>
        </Wrapper>
      </Container>
    </SectionWrap>
  );
};

export default PlatformDescription;
