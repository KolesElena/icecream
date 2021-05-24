import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

it('initial conditions', () => {
  render(<SummaryForm/>);

  const checkbox = screen.getByRole('checkbox', { name: 'Terms and conditions'});

  expect(checkbox).not.toBeChecked();

  const button = screen.getByRole('button', {name: 'Send order'});

  expect(button).toBeDisabled();
});

it('checkbox enables and disables by click', () => {
  render(<SummaryForm/>);
  const checkbox = screen.getByRole('checkbox', { name: 'Terms and conditions'});
  const button = screen.getByRole('button', {name: 'Send order'});

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});