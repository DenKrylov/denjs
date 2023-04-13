import "styled-components";

export interface ITheme {
  colors: {
    success: string;
    danger: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {
    type: EnumTheme;

    bg: {
      main: string;
      secondary: string;
    };
    color: {
      main: string;
      secondary: string;
    };
  }
}
