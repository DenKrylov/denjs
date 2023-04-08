import styled from "styled-components";
import { theme } from "../../theme";

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
  background: ${({active}) => active ? theme.color.secondary : theme.color.main };
  color: ${({active}) => active ? theme.color.main : theme.color.secondary};
  height: ${({height}) => height}rem;
  width: ${({width}) => width}rem;
  border: .1rem solid ${({active}) => active ? theme.color.secondary : theme.color.secondary };
  border-radius: ${theme.button.borderRadius};
  cursor: pointer;
`;