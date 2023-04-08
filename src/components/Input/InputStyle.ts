import styled from "styled-components";

interface IWrapperInput {
  height: number;
  width: number;
}

export const WrapperInput = styled.input<IWrapperInput>`
  height: ${({height}) => height}rem;
  width: ${({width}) => width}rem;
`;