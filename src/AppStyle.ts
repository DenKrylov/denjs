import styled from "styled-components";

export const WrapperApp = styled.div`
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.bg.main};
  color: ${({ theme }) => theme.color.main};
`;
