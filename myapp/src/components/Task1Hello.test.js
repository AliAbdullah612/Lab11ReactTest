import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders Hello component', () => {
  render(<Hello />);
  const headingElement = screen.getByTestId('hello-heading');
  expect(headingElement).toBeInTheDocument();
});
