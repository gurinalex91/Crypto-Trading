import React from "react";

import {
  CardsWraper,
  Card,
  CardTitle,
  CardLink,
  GradientLayer,
} from "./CardsSection.styles";

import { Container, SectionWrap, Title } from "../../GlobalStyles";
import CardBG1 from "../../images/bg_card1.png";
import CardBG2 from "../../images/bg_card2.png";

const CardsSection = () => {
  return (
    <SectionWrap>
      <Container>
        <CardsWraper>
          <Card className="first">
            <img src={CardBG1} alt="" />
            <GradientLayer>
              <CardTitle>Spot & Margin</CardTitle>
              <Title>
                Trade <span className="colored">200+ </span>pairs with up to 10x
                leverage
              </Title>
              <CardLink href="#">Learn more</CardLink>
            </GradientLayer>
          </Card>
          <Card>
            <GradientLayer>
              <CardTitle>Derivatives</CardTitle>
              <Title>40+ quarterly futures and contracts</Title>
              <CardLink href="#">Learn more</CardLink>
            </GradientLayer>
          </Card>
          <Card>
            <GradientLayer>
              <CardTitle>Trading Arena</CardTitle>
              <Title>
                Prize pools
                <br />
                worth up to
                <br /> USD 1,000,000
              </Title>
              <CardLink href="#">Learn more</CardLink>
            </GradientLayer>
          </Card>
          <Card className="last">
            <GradientLayer>
              <CardTitle>mobile app</CardTitle>
              <Title>Trade anytime, anywhere</Title>
              <CardLink href="#">Learn more</CardLink>
            </GradientLayer>
          </Card>
        </CardsWraper>
      </Container>
    </SectionWrap>
  );
};

export default CardsSection;
