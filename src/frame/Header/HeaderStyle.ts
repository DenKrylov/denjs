import styled from "styled-components";

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

export const LogoHeader = styled.h1``;

export const LinkListHeader = styled.ul`
  display: flex;
`;

export const ListElementHeader = styled.li``;

export const LinkElementHeader = styled.a`
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  * {
    fill: ${({ theme }) => theme.bg.secondary};
  }

  :hover {
    background-color: ${({ theme }) => theme.bg.secondary};
  }

  :hover * {
    fill: ${({ theme }) => theme.bg.main};
  }
  transition: 300;
`;
