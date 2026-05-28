import { render, screen } from '@testing-library/react';
import App from './App';

test('renders academy headline', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /base web para una academia de ejercito clara, seria y ordenada/i,
    })
  ).toBeInTheDocument();
});
