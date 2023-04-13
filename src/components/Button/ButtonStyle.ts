import styled from "styled-components";

interface IWrapperButton {
  height: number;
  width: number;
  active: boolean;
  disable: boolean;
}

export const WrapperButton = styled.a<IWrapperButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bg.secondary};
  color: ${({ theme }) => theme.color.secondary};
  height: ${({ height }) => height}rem;
  width: ${({ width }) => width}rem;
  border: 2px solid ${({ theme }) => theme.color.secondary};
  border-radius: 5px;
  cursor: pointer;
`;
