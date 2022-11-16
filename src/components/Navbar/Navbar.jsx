import React, { useState, useEffect } from "react";
import { Container } from "../../GlobalStyles";

import Burger from "./Burger";
import {
  Header,
  HeaderWrap,
  Logo,
  LogoHovered,
  Navigation,
  StyledUl,
  StyledListItem,
  StyledLink,
  StyledLinkBtn,
} from "./Navbar.styles";
import { LinkArrow } from "../../imports";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Header
      className={navbar ? "active" : ""}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <HeaderWrap>
          <Logo href="/">
            С<LogoHovered>rypto traiding</LogoHovered>
          </Logo>

          <Burger />
          <Navigation>
            <StyledUl gap="45px">
              <StyledListItem>
                <StyledLink href="/">Activities</StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink href="/">Technology</StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink href="/">R&D</StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLink href="/">Community</StyledLink>
              </StyledListItem>
              <StyledListItem>
                <StyledLinkBtn href="/">
                  Career
                  <LinkArrow />
                </StyledLinkBtn>
              </StyledListItem>
            </StyledUl>
          </Navigation>
        </HeaderWrap>
      </Container>
    </Header>
  );
};

export default Navbar;
