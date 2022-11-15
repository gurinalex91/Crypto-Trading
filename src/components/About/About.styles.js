import styled from "styled-components";

import { Triangle1, Triangle2 } from "../../imports";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (min-width: 992px) {
    flex-direction: row;
    gap: 180px;
  }
`;

export const ImageBlock = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextBlock = styled.div`
  @media (min-width: 992px) {
    max-width: 370px;
    padding-top: 43px;
  }
`;

export const Heading = styled.h4`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 43px;
  @media (min-width: 992px) {
    font-size: 1.875rem;
    line-height: 43px;
    margin-bottom: 33px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin: ${(props) => props.marg};
  align-items: flex-start;
`;

export const TextDecor = styled.div`
  width: 20px;
  height: 30px;
  background: url(${Triangle1}) no-repeat center / cover;
  margin-right: 17px;
`;
export const TextDecor2 = styled(TextDecor)`
  background: url(${Triangle2}) no-repeat center / cover;
`;
