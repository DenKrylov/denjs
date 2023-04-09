import styled from "styled-components";
import { theme } from "../../theme";

export const WrapperForm = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${theme.bg.blackout};
`;

export const WindowForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  height: 40rem;
  width: 50rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${theme.color.secondary};
  input {
    margin-bottom: 2rem;
  }
`;