import styled from "styled-components";

import CardBG1 from "../../images/bg_card1.png";
import CardBG2 from "../../images/bg_card2.png";

export const CardsWraper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;

export const CardLink = styled.a`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #aaaaaa;
  transition: all 0.2s linear;
  width: fit-content;
`;

export const Card = styled.a`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  border: 2px solid rgba(211, 211, 211, 0.35);
  border-radius: 46px;
  overflow: hidden;
  background-color: #000;
  transition: all 0.2s ease-out;
  background: radial-gradient(
        ellipse 180px 90px at top left,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(196, 196, 196, 0) 100%
      )
      left top,
    radial-gradient(
        ellipse 180px 90px at right bottom,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(196, 196, 196, 0) 100%
      )
      bottom right,
    radial-gradient(
        circle at bottom right,
        rgba(255, 255, 255, 0.07) 0%,
        rgba(196, 196, 196, 0) 100%
      )
      bottom right;
  background-repeat: no-repeat;
  &.first {
    display: flex;
    flex-direction: column;
    background: url(${CardBG1}) top,
      radial-gradient(
          ellipse 260px 170px at top left,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(196, 196, 196, 0) 100%
        )
        left top,
      radial-gradient(
          ellipse 260px 170px at right bottom,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(196, 196, 196, 0) 100%
        )
        bottom right;
    background-repeat: no-repeat;
    padding-top: 350px;
  }
  &.last {
    background: url(${CardBG2}) right top,
      radial-gradient(
          ellipse 375px 75px at top,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(196, 196, 196, 0) 100%
        )
        left -15rem top,
      radial-gradient(
          ellipse 375px 75px at bottom,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(196, 196, 196, 0) 100%
        )
        right -15rem bottom,
      radial-gradient(
          ellipse 210px 175px at bottom right,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(196, 196, 196, 0) 100%
        )
        bottom right;
    background-repeat: no-repeat;
  }
  @media (min-width: 768px) {
    &.first {
      grid-row-start: 1;
      grid-row-end: 3;
    }
    &.last {
      grid-column-start: 2;
      grid-column-end: 4;
    }
  }
  &:hover {
    box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
    border: 1px solid #cccccc;
    color: #3e53f8;
    ${CardLink} {
      color: #ffffff;
      font-size: 17px;
      text-decoration: underline;
    }
  }
`;

export const CardTitle = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #aaaaaa;
`;
