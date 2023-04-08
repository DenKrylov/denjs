import styled from "styled-components";

export const WrapperForm = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, .3);
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
  border: 0.1rem solid black;
  input {
    margin-bottom: 2rem;
  }
`;