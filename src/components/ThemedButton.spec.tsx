import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import ThemedButton from './ThemedButton';

describe('ThemedButton Component', () => {
  render(<ThemedButton />);
  const lightModeIcon = screen.getByTestId('light-button');

  it('초기 버튼은 light mode 버튼이다.', () => {
    expect(lightModeIcon).toBeInTheDocument();
  });

  it('각 버튼을 클릭하면 반대 버튼으로 바뀐다.', async () => {
    setTimeout(() => {
      const darkModeIcon = screen.getByTestId('dark-button');
      expect(darkModeIcon).toBeInTheDocument();
      expect(lightModeIcon).not.toBeInTheDocument();

      userEvent.click(darkModeIcon);

      setTimeout(() => {
        expect(lightModeIcon).toBeInTheDocument();
        expect(darkModeIcon).not.toBeInTheDocument();
      }, 10);
    }, 10);
  });
});
