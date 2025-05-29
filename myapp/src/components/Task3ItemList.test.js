import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

test('checks if Banana is in the list', () => {
  render(<ItemList />);
  const itemElement = screen.getByText('Banana');
  expect(itemElement).toBeInTheDocument();
});
