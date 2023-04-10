import styled from "styled-components";

export const WrapperApp = styled.div`
  height: 100%;
  display: flex;
  background-color: ${(props) => props.theme.colors.bgMain};
  color:${(props) => props.theme.colors.textMain};
`;