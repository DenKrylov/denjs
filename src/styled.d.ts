import 'styled-components';

declare module 'styled-components' {
  export interface ITheme {
    colors: {
      textMain: string,
      textSecondary: string,
      bgMain: string,
      bgSecondary: string,
      bgBlackout: string,
    }
  }
}