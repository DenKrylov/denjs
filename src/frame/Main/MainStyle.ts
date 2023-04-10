import styled from "styled-components";

export const WrapperMain = styled.article`
  flex: 1 0 auto;
  display: flex;
  justify-content: end;
  a {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
`;

export const InfoMain = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 1rem;
`;

export const TextMain = styled.p`
  font-size: 3rem;
`;