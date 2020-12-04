import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

test('Header to be visible', () => {
  const { container } = render(<Header />);
  expect(container).toBeVisible();
});
test('Loading icon to be visible', () => {
  const { getByTestId } = render(<Header />);
  const shoppingIcon = getByTestId(/file-upload-icon/i);

  expect(shoppingIcon).toBeVisible();
});
