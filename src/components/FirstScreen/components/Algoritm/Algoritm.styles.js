import styled from "styled-components";

import { AlgoritmIMG } from "../../../../imports";

export const Wrap = styled.div`
  width: 615px;
  height: 435px;
  /* background: radial-gradient(
    54.37% 54.37% at 53.26% 42.18%,
    #40539d 0%,
    rgba(96, 92, 255, 0) 100%
  );
  backdrop-filter: blur(4.5px); */
  position: absolute;
  top: 0;
  right: 0;
`;
export const AlgoritmImage = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: url(${AlgoritmIMG});
`;
