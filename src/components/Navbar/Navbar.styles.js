import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled(motion.header)`
  padding: 22px 0;
  width: 100%;
  transition: all 0.25s linear;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 0;
  &.active {
    background: #000;
    padding: 10px;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
`;
export const LogoHovered = styled.span`
  text-transform: uppercase;
  opacity: 0;
  z-index: -1;
  text-decoration: underline;
  color: #fff;
  transition: all 0.3s ease-in;
`;

export const Logo = styled.a`
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  &:hover {
    text-decoration: underline;
    ${LogoHovered} {
      width: auto;
      opacity: 1;
      z-index: 1;
    }
  }
`;

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
    background-color: #ffffff;
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

export const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  position: absolute;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
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
    position: static;
    align-items: center;
    justify-content: flex-end;
    height: auto;
    width: auto;
    flex-direction: row;
    transform: translateX(0);
  }
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
  @media (min-width: 992px) {
    justify-content: space-between;
    gap: 45px;
    width: 100%;
    align-items: center;
    flex-direction: row;
    background-color: transparent;
    min-height: auto;
    padding-top: 0;
  }
`;

export const StyledListItem = styled.li`
  position: relative;
`;

export const StyledLink = styled.a`
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #f3f3f3;
  text-decoration: none;
  transition: all ease-in 0.25s;
  padding-top: 1rem;
  border-bottom: 1px solid transparent;
  &:hover {
    color: #c7c7c7;
    border-bottom: 1px solid #3e53f8;
  }
  @media (min-width: 1700px) {
    font-size: 22px;
    line-height: 27px;
  }
`;

export const StyledLinkBtn = styled(StyledLink)`
  padding: 5px 15px;
  color: #000;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  background: linear-gradient(140.6deg, #ffffff -27.18%, #dedede 126.06%);
  box-shadow: 0px 0px 49px rgba(42, 7, 254, 0.4);
  border-radius: 10px;
  transition: all 0.3s linear;
  @media (min-width: 992px) {
    padding: 18px 43px;
  }
  & svg {
    path {
      transition: all ease-in-out 0.3s;
    }
  }
  &:hover {
    background: linear-gradient(140.6deg, #3e6ff9 -27.18%, #3e53f8 126.06%);
    color: #fff;
    svg {
      path {
        fill: #fff;
      }
    }
  }
`;
