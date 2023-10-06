import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    text: {
      primaryLight: string;
      primaryDark: string;

      secondaryLight: string;
      secondaryDark: string;

      tertiaryLight: string;
      tertiaryDark: string;

      accentLight: string;
      accentDark: string;
    };

    background: {
      primaryLight: string;
      primaryDark: string;

      secondaryLight: string;
      secondaryDark: string;

      accentLight: string;
      accentDark: string;

      selectLight: string;
      selectDark: string;
    };

    icon: {
      primaryLight: string;
      primaryDark: string;

      secondaryLight: string;
      secondaryDark: string;

      accentLight: string;
      accentDark: string;
    };

    outline: {
      primaryLight: string;
      primaryDark: string;

      secondaryLight: string;
      secondaryDark: string;
    };

    button: {
      primaryLight: string;
      primaryDark: string;

      secondaryLight: string;
      secondaryDark: string;
    };
  }
}
