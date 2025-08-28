import { render, screen } from '@testing-library/react';
import { InputField } from './InputField';

test('renders input field with label', () => {
  render(<InputField label="Email" />);
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
});
