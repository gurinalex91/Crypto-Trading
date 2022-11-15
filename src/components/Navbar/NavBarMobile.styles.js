import styled from "styled-components";

import { StyledListItem, StyledLink } from "./Navbar.styles";

export const BurgerWrap = styled.div`
  overflow: hidden;
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: calc(50% - 16px);
  right: 20px;
  z-index: 200;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  @media (min-width: 992px) {
    display: none;
  }
  div {
    width: 2rem;
    height: 4px;
    background-color: ${({ open }) => (open ? "#fff" : "#fff")};
    border-radius: 10px;
    transform-origin: 5px;
    transition: all 0.2s;
    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "")};
    }
    &:last-child {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "")};
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  @media (min-width: 992px) {
    display: none;
  }
`;
export const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  position: absolute;
`;

export const NavigationMenu = styled.ul`
  background-color: #000;
  width: 100%;
  height: 100vh;
  height: auto;
  align-self: flex-end;
  padding-top: 50px;
  text-align: center;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  min-height: 100vh;
  @media (min-width: 576px) {
    width: 50%;
    align-items: flex-start;
    padding-left: 10px;
  }
  @media (min-width: 768px) {
    width: 30%;
  }
`;
export const MobileStyledLink = styled(StyledLink)`
  padding: 0 10px;
`;
export const MobileStyledListItem = styled(StyledListItem)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
