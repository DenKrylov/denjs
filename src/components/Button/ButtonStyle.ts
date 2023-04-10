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
  background: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.textMain};
  height: ${({height}) => height}rem;
  width: ${({width}) => width}rem;
  border: .1rem solid ${(props) => props.theme.colors.bgSecondary};
  border-radius: 10px;
  cursor: pointer;
`;