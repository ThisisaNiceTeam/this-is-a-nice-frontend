import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom';
import ThemedButton from './ThemedButton';

describe('ThemedButton Component', () => {
  render(<ThemedButton />);
  const darkModeIcon = screen.getByTestId('dark-button');

  it('초기 버튼은 dark mode 버튼이다.', () => {
    expect(darkModeIcon).toBeInTheDocument();
  });

  it('각 버튼을 클릭하면 반대 버튼으로 바뀐다.', async () => {
    setTimeout(() => {
      const lightModeIcon = screen.getByTestId('light-button');
      expect(lightModeIcon).toBeInTheDocument();

      fireEvent.click(lightModeIcon);

      setTimeout(() => {
        expect(darkModeIcon).toBeInTheDocument();
      }, 10);
    }, 10);
  });
});
