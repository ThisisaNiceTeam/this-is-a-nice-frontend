import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      accent: string;
    };

    background: {
      primary: string;
      secondary: string;
      accent: string;
      select: string;
      home: string;
    };

    icon: {
      primary: string;
      secondary: string;
      accent: string;
    };

    outline: {
      primary: string;
      secondary: string;
    };

    button: {
      primary: string;
      secondary: string;
    };
  }
}
