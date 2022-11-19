import React, { useState, useEffect } from "react";
import { Container } from "../../GlobalStyles";

import {
  Header,
  HeaderWrap,
  Logo,
  LogoHovered,
  BurgerWrap,
  StyledBurger,
  Blur,
  Navigation,
  NavigationMenu,
  StyledListItem,
  StyledLink,
  StyledLinkBtn,
} from "./Navbar.styles";
import { LinkArrow } from "../../imports";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  document.body.style.overflow = open ? "hidden" : "visible";

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

          <BurgerWrap>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
              <div />
              <div />
            </StyledBurger>
          </BurgerWrap>
          <Navigation open={open}>
            <Blur open={open} />
            <NavigationMenu>
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
            </NavigationMenu>
          </Navigation>
        </HeaderWrap>
      </Container>
    </Header>
  );
};

export default Navbar;
