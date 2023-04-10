import { ITheme } from "styled-components";

export const lightTheme: ITheme = {
  colors: {
    textMain: "rgba(0, 0, 0, 1)",
    textSecondary: "rgba(255, 255, 255, 1)",
    bgMain: "rgba(255, 255, 255, 1)",
    bgSecondary: "rgba(0, 0, 0, 1)",
    bgBlackout: "rgba(255, 255, 255, 0.3)",
  }
};

export const darkTheme: ITheme = {
  colors: {
    textMain: "rgba(255, 255, 255, 1)",
    textSecondary: "rgba(0, 0, 0, 1)",
    bgMain: "rgba(0, 0, 0, 1)",
    bgSecondary: "rgba(255, 255, 255, 1)",
    bgBlackout: "rgba(0, 0, 0, 0.3)",
  }
};