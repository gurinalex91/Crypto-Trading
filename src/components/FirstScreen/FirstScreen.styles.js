import styled from "styled-components";

import { Text, Button } from "../../GlobalStyles";
import { FsBg } from "../../imports";

export const Background = styled.div`
  width: 100%;
  margin: 0 auto;
  background: url(${FsBg}) no-repeat;
  position: relative;
  height: 100vh;
  min-height: 670px;
`;
export const TextBlock = styled.div`
  @media (min-width: 768px) {
    padding-right: 600px;
  }
`;
export const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 6rem;
  line-height: 90px;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
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
`;

export const MainText = styled(Text)`
  font-size: 1.6rem;
  line-height: 30px;
`;

export const MainButton = styled(Button)`
  padding: 24px 90px 24px 30px;
  position: relative;
  margin: 94px auto;
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
  &:hover::before{
    background: #1556ee;
  }
  &:hover::after{
    border-bottom: 2px solid #fff;
    border-right: 2px solid #fff;
  }
`;

export const MouseIcoWrapper = styled.div`
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
`;
export const MouseLink = styled.a``;
