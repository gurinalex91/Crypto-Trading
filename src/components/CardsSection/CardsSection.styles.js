import styled from "styled-components";

import CardBG1 from "../../images/bg_card1.png";
import CardBGMobile from "../../images/bg_card1_mobile.png";
import CardBG2 from "../../images/bg_card2.png";

export const CardsWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  @media (min-width: 769px) {
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
  background-color: #000;
  &.first {
    background: url(${CardBGMobile}) bottom / contain,
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
    background-color: #000;
    padding: 30px 30px 240px;
  }
  &.last {
    background: url(${CardBG2}) 70px 220px,
      radial-gradient(
          ellipse 375px 75px at top,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(196, 196, 196, 0) 100%
        )
        left 0 top,
      radial-gradient(
          ellipse 375px 75px at bottom,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(196, 196, 196, 0) 100%
        )
        right 0 bottom,
      radial-gradient(
          ellipse 210px 175px at bottom right,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(196, 196, 196, 0) 100%
        )
        bottom right;
    background-repeat: no-repeat;
    background-color: #000;
    padding: 30px 30px 190px;
  }
  @media (min-width: 576px) {
    &.first {
      padding: 30px 30px 190px;
    }
  }
  @media (min-width: 769px) {
    &.first {
      grid-row-start: 1;
      grid-row-end: 3;
      padding: 350px 30px 30px;
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
    }
    &.last {
      background-position: right top, left -15rem top, right -15rem bottom,
        bottom right;
      grid-column-start: 2;
      grid-column-end: 4;
      background-repeat: no-repeat;
      padding: 30px;
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
