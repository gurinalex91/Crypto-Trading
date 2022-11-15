import React from "react";

import {
  Navigation,
  NavigationMenu,
  Blur,
  MobileStyledListItem,
  MobileStyledLink,
} from "./NavBarMobile.styles";
import { StyledLinkBtn } from "./Navbar.styles";
import { LinkArrow } from "../../imports";

const NavBarMobile = ({ open }) => {
  return (
    <Navigation open={open}>
      <Blur open={open} />
      <NavigationMenu>
        <MobileStyledListItem>
          <MobileStyledLink href="/">Activities</MobileStyledLink>
        </MobileStyledListItem>
        <MobileStyledListItem>
          <MobileStyledLink href="/">Technology</MobileStyledLink>
        </MobileStyledListItem>
        <MobileStyledListItem>
          <MobileStyledLink href="/">R&D</MobileStyledLink>
        </MobileStyledListItem>
        <MobileStyledListItem>
          <MobileStyledLink href="/">Community</MobileStyledLink>
        </MobileStyledListItem>
        <MobileStyledListItem>
          <StyledLinkBtn href="/">
            Career
            <LinkArrow />
          </StyledLinkBtn>
        </MobileStyledListItem>
      </NavigationMenu>
    </Navigation>
  );
};

export default NavBarMobile;
