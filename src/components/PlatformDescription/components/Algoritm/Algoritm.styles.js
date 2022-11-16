import styled from "styled-components";

import Arrows from "../../../../images/arrows.svg";
import ArrowsMobile from "../../../../images/arrows-mobile.svg";

export const Wrap = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
  margin-bottom: 90px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0 0;
  @media (min-width: 768px) {
    padding: 0 0 57px;
    flex-direction: column;
  }
`;

export const StyledWraper = styled(Wrapper)`
  padding: 27px;
  background: radial-gradient(
    rgba(48, 48, 48, 0.15) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: inset -4px -4px 225px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(13px);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  flex-wrap: wrap;
  gap: 20px;
  &.big {
    position: relative;
  }
  @media (min-width: 380px) {
    gap: 20px 34px;
  }
  @media (min-width: 768px) {
    padding: ${(props) => props.padd || "27px"};
    max-width: 236px;
    gap: 0;
  }
`;
export const AlgoritmElementWrap = styled.div`
  width: 100%;
`;
export const AlgoritmElementsWrap = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    order: 0;
    display: block;
  }
`;

export const AlgoritmElement = styled.div`
  padding: 12px;
  background: #000;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  position: relative;
  width: 40%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.mobile-middle {
    order: 1;
    width: 160px;
    margin: 0 auto;
  }
  &.first-left {
    order: 2;
  }
  &.first-right {
    order: 3;
  }
  &.first {
    &::after {
      content: "";
      height: 29px;
      width: 1px;
      background: linear-gradient(
        rgba(183, 182, 187, 1) 0%,
        rgba(94, 89, 113, 1) 100%
      );
      position: absolute;
      left: 50%;
      top: 100%;
    }
  }
  &.mobile-middle {
    &::after {
      height: 150px;
    }
  }
  &.second {
    &::before {
      content: "";
      height: 18px;
      width: 170px;
      position: absolute;
      bottom: 100%;
    }
    &::after {
      content: "";
      height: 64px;
      width: 1px;
      background: linear-gradient(
        rgba(183, 182, 187, 1) 0%,
        rgba(94, 89, 113, 1) 100%
      );
      position: absolute;
      left: 50%;
      top: 100%;
      z-index: 2;
    }
    &.second-top {
      &::before {
        border-top: 1px solid #b7b6bb;
        border-left: 1px solid #b7b6bb;
        left: 50%;
      }
    }
    &.second-bottom {
      &::before {
        border-top: 1px solid #b7b6bb;
        border-right: 1px solid #b7b6bb;
        right: 50%;
      }
    }
  }
  @media (min-width: 576px) {
    &.second {
      &::before {
        width: 320px;
      }
    }
  }
  @media (min-width: 768px) {
    width: 160px;
    height: auto;
    line-height: 170%;
    margin: ${(props) => props.marg};
    &.first {
      order: 0;
      &::after {
        content: "";
        height: 1px;
        width: 28px;
        background: linear-gradient(
          rgba(183, 182, 187, 1) 0%,
          rgba(94, 89, 113, 1) 100%
        );
        position: absolute;
        left: 100%;
        top: 50%;
      }
    }
    &.first-middle {
      order: 0;
      &::after {
        width: 45px;
      }
    }
    &.second {
      &::before {
        content: "";
        height: 48px;
        width: 18px;
        position: absolute;
        left: -20px !important;
      }
      &::after {
        display: none;
      }
      &.second-top {
        &::before {
          border-top: 1px solid #b7b6bb;
          border-left: 1px solid #b7b6bb;
          top: 50%;
        }
      }
      &.second-bottom {
        &::before {
          border-bottom: 1px solid #b7b6bb;
          border-left: 1px solid #b7b6bb;
          border-top: none;
          border-right: none;
          top: -9px;
        }
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
  }
`;
export const IconWrap = styled.div`
  order: 2;
  width: 100%;
  text-align: center;
  @media (min-width: 768px) {
    order: 0;
  }
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  margin: 0 0 25px;
  order: 3;
  padding: 0 25px;
  @media (min-width: 768px) {
    order: 0;
    padding: 0;
  }
`;
export const WordWrap = styled.div`
  position: absolute;
  bottom: -60px;
  right: calc(50% - 34px);
  @media (min-width: 768px) {
    bottom: -90px;
  }
`;

export const Word = styled.div`
  position: relative;
  padding-top: 75px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(50% - 22px);
    width: 44px;
    height: 90px;
    background: url(${ArrowsMobile}) no-repeat;
  }
  @media (min-width: 768px) {
    padding-top: 125px;
    &::before {
      background: url(${Arrows}) no-repeat;
    }
  }
`;
