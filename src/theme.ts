import { DefaultTheme } from "styled-components";
import { ITheme } from "./styled";

export enum EnumTheme {
  light = "light",
  dark = "dark",
}

const defaultTheme: ITheme = {
  colors: {
    success: "blue",
    danger: "red",
  },
};

export const darkTheme: DefaultTheme = {
  ...defaultTheme,
  type: EnumTheme.light,
  bg: {
    main: "rgb(255, 255, 255)",
    secondary: "rgb(0, 0, 0)",
  },
  color: {
    ...defaultTheme.colors,
    main: "rgb(0, 0, 0)",
    secondary: "rgb(255, 255, 255)",
  },
};

export const lightTheme: DefaultTheme = {
  ...defaultTheme,
  type: EnumTheme.dark,

  bg: {
    main: "rgb(0, 0, 0)",
    secondary: "rgb(255, 255, 255)",
  },

  color: {
    ...defaultTheme.colors,
    main: "rgb(255, 255, 255)",
    secondary: "rgb(0, 0, 0)",
  },
};
