import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Slacker's list/i);
  expect(linkElement).toBeInTheDocument();
});
