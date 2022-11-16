import { motion } from "framer-motion";
import styled from "styled-components";

import { Text, Button } from "../../GlobalStyles";
import { FsBg } from "../../imports";

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 80px;
  background: url(${FsBg}) no-repeat center;
  position: relative;
  @media (min-width: 992px) {
    margin-top: 60px;
    height: 100vh;
    background: url(${FsBg}) no-repeat top / 90% 90%;
  }
`;
export const TextBlock = styled(motion.div)`
  @media (min-width: 992px) {
    padding-right: 570px;
  }
`;
export const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  line-height: 61px;
  text-align: center;
  margin-bottom: 20px;
  span {
    background: linear-gradient(
      89.95deg,
      #487fff -1.65%,
      #73b5ff 51.06%,
      #cb76ff 99.96%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 576px) {
    font-size: 3.25rem;
  }
  @media (min-width: 992px) {
    font-size: 6rem;
    line-height: 90px;
    text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    margin-bottom: 32px;
    text-align: left;
  }
`;

export const MainText = styled(Text)`
  font-size: 1.125rem;
  line-height: 140%;
  text-align: center;
  padding: 0 3rem;
  @media (min-width: 768px) {
    padding: 0 6rem;
  }
  @media (min-width: 992px) {
    font-size: 1.6rem;
    line-height: 30px;
    text-align: left;
    padding: 0;
  }
`;

export const MainButton = styled(Button)`
  padding: 24px 90px 24px 30px;
  position: relative;
  margin: 40px auto;
  @media (min-width: 992px) {
    margin: 94px auto 80px;
  }
  &::before {
    content: "";
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top: calc(50% - 12px);
    right: 17px;
    transition: all 0.3s linear;
  }
  &::after {
    content: "";
    width: 8px;
    height: 8px;
    border-bottom: 2px solid #1556ee;
    border-right: 2px solid #1556ee;
    position: absolute;
    top: calc(50% - 7px);
    right: 24px;
    transform: rotate(45deg);
    transition: all 0.3s linear;
  }
  &:hover::before {
    background: #1556ee;
  }
  &:hover::after {
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
  }
`;

export const MouseIcoWrapper = styled(motion.div)`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    text-align: center;
    & svg {
      path,
      rect {
        transition: all ease-in-out 0.3s;
      }
    }
    & svg:hover {
      path,
      rect {
        stroke: #1556ee;
      }
    }
  }
`;
export const MouseLink = styled.a``;
