import styled from "styled-components";

import CardBG2 from "../../images/bg_card2.png";

export const CardsWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const GradientLayer = styled.div`
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  background: radial-gradient(
        circle at top left,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(196, 196, 196, 0) 100%
      )
      left 0 top 0,
    radial-gradient(
        circle at right bottom,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(196, 196, 196, 0) 100%
      )
      bottom 0 right 0;
  background-size: 60% 50%;
  background-repeat: no-repeat;
`;
export const Card = styled.div`
  border: 2px solid rgba(211, 211, 211, 0.35);
  border-radius: 46px;
  overflow: hidden;
  &.first {
    grid-row-start: 1;
    grid-row-end: 3;
    ${GradientLayer} {
      background: radial-gradient(
            circle at top left,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(196, 196, 196, 0) 100%
          )
          left -30px top -200px,
        radial-gradient(
            circle at right bottom,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(196, 196, 196, 0) 100%
          )
          bottom 160px right -45px;
      background-size: 110% 50%;
      background-repeat: no-repeat;
      padding-top: 350px;
      margin-top: -510px;
    }
  }
  &.last {
    grid-column-start: 2;
    grid-column-end: 4;
    background: url(${CardBG2}) no-repeat right top;
    ${GradientLayer} {
      background: radial-gradient(
            circle at top left,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(196, 196, 196, 0) 100%
          )
          left 0 top 0,
        radial-gradient(
            circle at right bottom,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(196, 196, 196, 0) 100%
          )
          bottom 0 right 0;
      background-size: 50% 100%;
      background-repeat: no-repeat;
  }
`;

export const CardTitle = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #aaaaaa;
`;

export const CardLink = styled.a`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #aaaaaa;
  transition: all 0.3s linear;
  width: fit-content;
  &:hover {
    color: #ffffff;
    font-size: 17px;
    text-decoration: underline;
  }
`;
