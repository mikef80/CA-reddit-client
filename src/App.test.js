import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

test('should render menu/title bar', () => {
  render(<App />);
  const titleBar = screen.getByRole('titleBar');
  expect(titleBar).toBeInTheDocument();
})
