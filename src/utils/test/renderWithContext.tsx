import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { AppRouterContext, AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

import { createMockRouter } from './createMockRouter';

export function renderWithContext(component: JSX.Element, router: AppRouterInstance = createMockRouter()) {
  return render(<AppRouterContext.Provider value={router}>{component}</AppRouterContext.Provider>);
}
