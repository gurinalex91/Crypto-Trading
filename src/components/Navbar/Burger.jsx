import React, { useState } from "react";

import NavBarMobile from "./NavBarMobile";
import { BurgerWrap, StyledBurger } from "./NavBarMobile.styles";

const Burger = () => {
  const [open, setOpen] = useState(false);

  document.body.style.overflow = open ? "hidden" : "visible";

  return (
    <BurgerWrap>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
      </StyledBurger>
      <NavBarMobile open={open} />
    </BurgerWrap>
  );
};

export default Burger;
