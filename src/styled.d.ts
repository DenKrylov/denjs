import 'styled-components';

declare module 'styled-components' {
  export interface ITheme {
    isDarkTheme: boolean;
    
    window: {
      borderRadius: string,
    }

    button: {
      borderRadius: string,
      transition: number,
    }

    input: {
      borderRadius: string,
    }

    color: {
      main: string;
      secondary: string;
    };

    bg: {
      main: string;
      secondary: string;
      blackout: string;
    };
  }
}