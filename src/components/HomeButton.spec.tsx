import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import { renderWithContext } from '@/utils/test/renderWithContext';
import { createMockRouter } from '@/utils/test/createMockRouter';

import HomeButton from './HomeButton';

describe('HomeButton', () => {
  const router = createMockRouter();

  it('render Test', () => {
    const { container } = renderWithContext(<HomeButton />, router);

    const logo = screen.getByAltText('logo');
    const title = screen.getByText('사이트 이름');
    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('click Event Test', () => {
    renderWithContext(<HomeButton />, router);
    const homeButton = screen.getByRole('button');
    expect(homeButton).toBeInTheDocument();
    userEvent.click(homeButton);
  });
});
