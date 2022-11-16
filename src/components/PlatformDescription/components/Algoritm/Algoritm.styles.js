import styled from "styled-components";

import Arrows from "../../../../images/arrows.svg";

export const Wrap = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  gap: 35px;
  @media (min-width: 992px) {
    margin-bottom: 90px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 57px;
`;

export const StyledWraper = styled(Wrapper)`
  padding: ${(props) => props.padd || "27px"};
  background: radial-gradient(
    rgba(48, 48, 48, 0.15) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset -4px -4px 225px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(13px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  &.big {
    position: relative;
  }
`;

export const AlgoritmElement = styled.div`
  padding: 12px;
  background: #000;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  width: 160px;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  margin: ${(props) => props.marg};
  position: relative;
  &.first {
    &::after {
      content: "";
      height: 1px;
      width: 28px;
      background: linear-gradient(
        rgba(183, 182, 187, 1) 0%,
        rgba(94, 89, 113, 1) 100%
      );
      position: absolute;
      right: -28px;
      top: 50%;
    }
  }
  &.first-middle {
    &::after {
      content: "";
      height: 1px;
      width: 45px;
      background: linear-gradient(
        rgba(183, 182, 187, 1) 0%,
        rgba(94, 89, 113, 1) 100%
      );
      position: absolute;
      right: -45px;
      top: 50%;
    }
  }
  &.second-top {
    &::before {
      content: "";
      height: 48px;
      width: 18px;
      border-top: 1px solid #b7b6bb;
      border-left: 1px solid #b7b6bb;
      position: absolute;
      left: -20px;
      top: 50%;
    }
  }
  &.second-bottom {
    &::before {
      content: "";
      height: 48px;
      width: 18px;
      border-bottom: 1px solid #b7b6bb;
      border-left: 1px solid #b7b6bb;
      position: absolute;
      left: -20px;
      top: -9px;
    }
  }
  &.third {
    &::before {
      content: "";
      height: 1px;
      width: 74px;
      background: linear-gradient(
        rgba(183, 182, 187, 1) 0%,
        rgba(94, 89, 113, 1) 100%
      );
      position: absolute;
      left: -74px;
      top: 50%;
    }
  }
`;
export const IconWrap = styled.div``;
export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin: 0 0 25px;
`;
export const WordWrap = styled.div`
  position: absolute;
  bottom: -90px;
  right: calc(50% - 34px);
`;

export const Word = styled.div`
  position: relative;
  padding-top: 125px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(50% - 22px);
    width: 44px;
    height: 90px;
    background: url(${Arrows}) no-repeat;
  }
`;
