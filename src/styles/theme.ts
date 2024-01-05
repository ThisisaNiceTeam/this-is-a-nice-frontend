import { Theme } from '@emotion/react';

const text = {
  'primary-light': '#000000',
  'primary-dark': '#ffffff',

  'secondary-light': '#666666',
  'secondary-dark': '#85868e',

  'tertiary-light': '#ffffff',
  'tertiary-dark': '#000000',

  'accent-light': '#5093ed',
  'accent-dark': '#5093ed',
};

const background = {
  'primary-light': '#ededed',
  'primary-dark': '#313136',

  'secondary-light': '#e1e1e1',
  'secondary-dark': '#202026',

  'accent-light': '#ffffff',
  'accent-dark': '#47484f',

  'select-light': '#ffffff',
  'select-dark': '#313136',

  'home-light': '#ffffff',
  'home-dark': '#202026',

  'home-gradient-light': '#c7d4e5',
  'home-gradient-dark': '#000000',

  'home-gradient-30-light': '#87909c',
  'home-gradient-30-dark': '#000000',
};

const icon = {
  'primary-light': '#b4b4b4',
  'primary-dark': '#85868e',

  'secondary-light': '#888888',
  'secondary-dark': '#47484f',

  'accent-light': '#5093ed',
  'accent-dark': '#ffffff',
};

const outline = {
  'primary-light': '#b4b4b4',
  'primary-dark': '#47484f',

  'secondary-light': '#888888',
  'secondary-dark': '#202026',
};

const button = {
  'primary-light': '#d8d8d8',
  'primary-dark': '#313136',

  'secondary-light': '#b4b4b4',
  'secondary-dark': '#85868e',
};

const lightTheme: Theme = {
  text: {
    primary: text['primary-light'],
    secondary: text['secondary-light'],
    tertiary: text['tertiary-light'],
    accent: text['accent-light'],
  },

  background: {
    primary: background['primary-light'],
    secondary: background['secondary-light'],
    accent: background['accent-light'],
    select: background['select-light'],
    home: background['home-light'],
    gradient: background['home-gradient-light'],
    gradientDark: background['home-gradient-30-light'],
  },

  icon: {
    primary: icon['primary-light'],
    secondary: icon['secondary-light'],
    accent: icon['accent-light'],
  },

  outline: {
    primary: outline['primary-light'],
    secondary: outline['secondary-light'],
  },

  button: {
    primary: button['primary-light'],
    secondary: button['secondary-light'],
  },
};

const darkTheme: Theme = {
  text: {
    primary: text['primary-dark'],
    secondary: text['secondary-dark'],
    tertiary: text['tertiary-dark'],
    accent: text['accent-dark'],
  },

  background: {
    primary: background['primary-dark'],
    secondary: background['secondary-dark'],
    accent: background['accent-dark'],
    select: background['select-dark'],
    home: background['home-dark'],
    gradient: background['home-gradient-dark'],
    gradientDark: background['home-gradient-30-dark'],
  },

  icon: {
    primary: icon['primary-dark'],
    secondary: icon['secondary-dark'],
    accent: icon['accent-dark'],
  },

  outline: {
    primary: outline['primary-dark'],
    secondary: outline['secondary-dark'],
  },

  button: {
    primary: button['primary-dark'],
    secondary: button['secondary-dark'],
  },
};

export default { lightTheme, darkTheme };
