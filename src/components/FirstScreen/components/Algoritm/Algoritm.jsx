import React from "react";

import { Wrap, AlgoritmImage } from "./Algoritm.styles";

const Algoritm = () => {
  return (
    <Wrap
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <AlgoritmImage />
    </Wrap>
  );
};

export default Algoritm;
