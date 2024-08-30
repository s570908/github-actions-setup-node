// Add this import at the top of your file
import { act } from 'react';  // Correct import
import { render, screen } from '@testing-library/react'; // Keep other testing-library imports
import App from './App';

test('renders learn react link', () => {
  // Wrap rendering inside `act` to avoid warnings and ensure proper testing behavior
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<App />);
  });

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
