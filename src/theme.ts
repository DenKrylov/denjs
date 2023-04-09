import { ITheme } from 'styled-components';

export const theme: ITheme = {
  isDarkTheme: true,

  window: {
    borderRadius: "5px",
  },

  button: {
    borderRadius: "5px",
    transition: 300,
  },

  input: {
    borderRadius: "5px",
  },

  color: {
    main: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(0, 0, 0, 1)',
  },

  bg: {
    main: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(0, 0, 0, 1)',
    blackout: 'rgba(255, 255, 255, 0.3)',
  }
};
