import React from "react";

import {
  Content,
  ImageBlock,
  TextBlock,
  Heading,
  Wrapper,
  TextDecor,
  TextDecor2,
} from "./About.styles";
import {
  Button,
  Container,
  SectionWrap,
  SectionTitle,
  Text,
  Title,
} from "../../GlobalStyles";
import Сhart from "../../images/chart.png";

const About = () => {
  return (
    <SectionWrap id="about">
      <Container>
        <SectionTitle fs="15px" textAlign="center" padd="10px 0 0 0">
          about us
        </SectionTitle>
        <Title textAlign="center" marg="20px 0 65px 0">
          Global technologies
        </Title>
        <Content>
          <ImageBlock>
            <img src={Сhart} alt="" />
          </ImageBlock>
          <TextBlock>
            <Heading>Level 1</Heading>
            <Wrapper>
              <TextDecor />
              <Text>
                Deploy a multi-legged futures strategy by simultaneously placing
                orders to buy and sell from the same order ticket.
              </Text>
            </Wrapper>
            <Wrapper marg="26px 0 44px 0">
              <TextDecor2 />
              <Text>
                Place and manage orders based on the Level 2 order book, which
                provides a live display of all bids and offers waiting to be
                executed.
              </Text>
            </Wrapper>
            <Button>Start Now</Button>
          </TextBlock>
        </Content>
      </Container>
    </SectionWrap>
  );
};
export default About;
