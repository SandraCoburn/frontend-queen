import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

test('Footer to be visible', () => {
  const { container } = render(<Footer />);
  expect(container).toBeVisible();
});
test('Links to be visible', () => {
  const { getByText } = render(<Footer />);
  const terms = getByText(/Terms of Services/i);
  const privacy = getByText(/Privacy/i);

  expect(terms).toBeVisible();
  expect(privacy).toBeVisible();
});
