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
    const title = screen.getByText('싸피라이브');

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it('클릭하면 홈으로 이동한다.', async () => {
    render();

    await userEvent.click(screen.getByRole('button'));

    expect(router.push).toBeCalledWith('/');
  });
});
