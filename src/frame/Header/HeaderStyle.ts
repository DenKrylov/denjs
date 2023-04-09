import styled from "styled-components";
import { theme } from "../../theme";

export const WrapperHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const LogoHeader = styled.h1`
`;

export const LinkListHeader = styled.ul`
  display: flex;
`;

export const ListElementHeader = styled.li`
`;

export const LinkElementHeader = styled.a`
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .3rem;
  * {
    fill: ${theme.color.secondary}
  }

  :hover {
    background-color: ${theme.bg.secondary};
  }

  :hover * {
    fill: ${theme.color.main};
  }
  transition: ${theme.button.transition};
`;