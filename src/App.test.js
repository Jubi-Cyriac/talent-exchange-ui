import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the correct heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/welcome to my app/i); // Adjust text as per your App component
  expect(headingElement).toBeInTheDocument();
});

test('renders a button and checks its text', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /click me/i }); // Adjust text as per your button
  expect(buttonElement).toBeInTheDocument();
});

test('renders a list of items', () => {
  render(<App />);
  const listItemElements = screen.getAllByRole('listitem'); // Ensure there are `listitem` elements in your App
  expect(listItemElements.length).toBeGreaterThan(0); // Adjust based on expected list item count
});
