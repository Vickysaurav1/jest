import { render, screen } from '@testing-library/react';
import Name from './Name';

test('should render addition of 2+3', () => {
  render(<Name />);
  const linkElement = 2+3;
  expect(linkElement).toBe(5);
});