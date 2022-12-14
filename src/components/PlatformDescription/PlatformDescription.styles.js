import styled from "styled-components";

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding-top: 55px;
  @media (min-width: 1025px) {
    order: 2;
    flex: 0 0 30%;
  }
`;
export const ImageBlock = styled.div`
  @media (min-width: 1025px) {
    order: 1;
    flex: 0 0 65%;
  }
`;
export const Link = styled.a`
  color: #7b93ff;
  text-decoration: none;
  font-size: 15px;
  line-height: 150%;
  transition: all 0.3s linear;
  &:hover{
    font-size: 17px;
    text-decoration: underline;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;
