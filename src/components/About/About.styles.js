import styled from "styled-components";

import { Triangle1, Triangle2 } from "../../imports";

export const Wrap = styled.div`
  @media (min-width: 768px) {
    padding: 100px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 180px;
`;

export const ImageBlock = styled.div``;

export const TextBlock = styled.div`
  max-width: 370px;
  padding-top: 43px;
`;

export const Heading = styled.h4`
  font-weight: 600;
  font-size: 30px;
  line-height: 43px;
  margin-bottom: 33px;
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
