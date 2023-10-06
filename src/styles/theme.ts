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
};

const icon = {
  'primary-light': '#b4b4b4',
  'primary-dark': '#85868e',

  'secondary-light': '#888888',
  'secondary-dark': '#47484f',

  'accent-light': '#5093ed',
  'accent-dark': '#5093ed',
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

const theme: Theme = {
  text: {
    primaryLight: text['primary-light'],
    primaryDark: text['primary-dark'],

    secondaryLight: text['secondary-light'],
    secondaryDark: text['secondary-dark'],

    tertiaryLight: text['tertiary-light'],
    tertiaryDark: text['tertiary-dark'],

    accentLight: text['accent-light'],
    accentDark: text['accent-dark'],
  },

  background: {
    primaryLight: background['primary-light'],
    primaryDark: background['primary-dark'],

    secondaryLight: background['secondary-light'],
    secondaryDark: background['secondary-dark'],

    accentLight: background['accent-light'],
    accentDark: background['accent-dark'],

    selectLight: background['select-light'],
    selectDark: background['select-dark'],
  },

  icon: {
    primaryLight: icon['primary-light'],
    primaryDark: icon['primary-dark'],

    secondaryLight: icon['secondary-light'],
    secondaryDark: icon['secondary-dark'],

    accentLight: icon['accent-light'],
    accentDark: icon['accent-dark'],
  },

  outline: {
    primaryLight: outline['primary-light'],
    primaryDark: outline['primary-dark'],

    secondaryLight: outline['secondary-light'],
    secondaryDark: outline['secondary-dark'],
  },

  button: {
    primaryLight: button['primary-light'],
    primaryDark: button['primary-dark'],

    secondaryLight: button['secondary-light'],
    secondaryDark: button['secondary-dark'],
  },
};

export default theme;
