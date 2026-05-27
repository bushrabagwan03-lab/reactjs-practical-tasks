import { render, screen } from '@testing-library/react';

import Hello from './Hello';

test('renders hello text', () => {

  render(<Hello />);

  const textElement = screen.getByText(
    /Hello React Testing/i
  );

  expect(textElement).toBeInTheDocument();

});