import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Login component', () => {
  render(<App />);
  const loginElement = screen.getByRole('heading', { name: /login/i }); // Adjust based on the content of your Login component
  expect(loginElement).toBeInTheDocument();
});
