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

const CardsSection = () => {
  return (
    <SectionWrap>
      <Container>
        <CardsWraper>
          <Card className="first" href="#">
            <img src={CardBG1} alt="" />
            <GradientLayer>
              <CardTitle>Spot & Margin</CardTitle>
              <Title>
                Trade <span className="colored">200+ </span> <br />
                pairs with up
                <br /> to 10x leverage
              </Title>
              <CardLink href="#">Learn more</CardLink>
            </GradientLayer>
          </Card>
          <Card href="#">
            <GradientLayer>
              <CardTitle>Derivatives</CardTitle>
              <Title>40+ quarterly futures and contracts</Title>
              <CardLink href="#">Learn more</CardLink>
            </GradientLayer>
          </Card>
          <Card href="#">
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
          <Card className="last" href="#">
            <GradientLayer>
              <CardTitle>mobile app</CardTitle>
              <Title>
                Trade anytime, <br />
                anywhere
              </Title>
              <CardLink href="#">Learn more</CardLink>
            </GradientLayer>
          </Card>
        </CardsWraper>
      </Container>
    </SectionWrap>
  );
};

export default CardsSection;