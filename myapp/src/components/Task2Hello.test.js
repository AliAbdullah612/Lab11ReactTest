import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('heading has correct text', () => {
  render(<Hello />);
  const headingElement = screen.getByTestId('hello-heading');
  expect(headingElement).toHaveTextContent('Hello world');
});
