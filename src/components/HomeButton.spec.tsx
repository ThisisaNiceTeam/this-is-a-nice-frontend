import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import { renderWithContext, createMockRouter } from '@/utils/test';

import HomeButton from './HomeButton';

describe('HomeButton', () => {
  const router = createMockRouter();
  const render = () => renderWithContext(<HomeButton />, router);

  it('render Test', () => {
    render();

    const logo = screen.getByAltText('logo');
    const title = screen.getByText('사이트 이름');

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it('클릭하면 홈으로 이동한다.', async () => {
    render();

    const homeButton = screen.getByRole('button');
    await userEvent.click(homeButton);

    expect(router.push).toBeCalledWith('/');
  });
});
