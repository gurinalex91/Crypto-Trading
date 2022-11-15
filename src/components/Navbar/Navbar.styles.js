import styled from "styled-components";

export const Header = styled.header`
  padding: 22px 0;
  width: 100%;
  transition: all 0.25s linear;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
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

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"};
  gap: ${(props) => props.gap || ""};
  width: 100%;
  align-items: center;
  @media (max-width: 992px) {
    flex-direction: column;
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
    border-bottom: 1px solid #3E53F8;
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
