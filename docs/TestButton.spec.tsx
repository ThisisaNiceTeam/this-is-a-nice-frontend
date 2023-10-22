import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TestButton from './TestButton';

describe('TestButton', () => {
  test('초기 상태는 OFF다.', async () => {
    render(<TestButton />);

    expect(await screen.findByText<HTMLButtonElement>('OFF')).toBeInTheDocument();
  });

  test('클릭하면 On & OFF가 전환된다.', async () => {
    render(<TestButton />);

    userEvent.click(await screen.findByText<HTMLButtonElement>('OFF'));

    expect(await screen.findByText<HTMLButtonElement>('ON')).toBeInTheDocument();
  });
});
