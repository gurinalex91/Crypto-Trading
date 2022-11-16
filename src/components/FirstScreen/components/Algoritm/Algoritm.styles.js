import { motion } from "framer-motion";
import styled from "styled-components";

import { AlgoritmIMG } from "../../../../imports";

export const Wrap = styled(motion.div)`
  width: 100%;
  height: 270px;
  @media (min-width: 992px) {
    width: 615px;
    height: 435px;
    position: absolute;
    top: 80px;
    right: 0;
  }
`;
export const AlgoritmImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url(${AlgoritmIMG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 60px center;
  @media (min-width: 425px) {
   background-position: 120px center;
  }
  @media (min-width: 576px) {
   background-position: 290px center;
  }
  @media (min-width: 768px) {
   background-position: center;
  }
`;
