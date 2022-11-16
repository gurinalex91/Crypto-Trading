import React from "react";

import { CardsWraper, Card, CardTitle, CardLink } from "./CardsSection.styles";

import { Container, SectionWrap, Title } from "../../GlobalStyles";

const CardsSection = () => {
  return (
    <SectionWrap>
      <Container>
        <CardsWraper>
          <Card
            className="first"
            href="#"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <CardTitle>Spot & Margin</CardTitle>
            <Title>
              Trade <span className="colored">200+ </span> <br />
              pairs with up
              <br /> to 10x leverage
            </Title>
            <CardLink>Learn more</CardLink>
          </Card>
          <Card
            href="#"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <CardTitle>Derivatives</CardTitle>
            <Title>40+ quarterly futures and contracts</Title>
            <CardLink>Learn more</CardLink>
          </Card>
          <Card
            href="#"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <CardTitle>Trading Arena</CardTitle>
            <Title>
              Prize pools
              <br />
              worth up to
              <br /> USD 1,000,000
            </Title>
            <CardLink>Learn more</CardLink>
          </Card>
          <Card
            className="last"
            href="#"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <CardTitle>mobile app</CardTitle>
            <Title>
              Trade anytime, <br />
              anywhere
            </Title>
            <CardLink>Learn more</CardLink>
          </Card>
        </CardsWraper>
      </Container>
    </SectionWrap>
  );
};

export default CardsSection;
