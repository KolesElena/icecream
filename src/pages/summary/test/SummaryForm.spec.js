import { render, screen,waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event'

it('initial conditions', () => {
  render(<SummaryForm/>);

  const checkbox = screen.getByRole('checkbox', { name: /Terms and conditions/i});

  expect(checkbox).not.toBeChecked();

  const button = screen.getByRole('button', {name: 'Confirm order'});

  expect(button).toBeDisabled();
});

it('checkbox enables and disables by click', () => {
  render(<SummaryForm/>);
  const checkbox = screen.getByRole('checkbox', { name: /Terms and conditions/i});
  const button = screen.getByRole('button', {name: 'Confirm order'});

  userEvent.click(checkbox);
  expect(button).toBeEnabled();
  
  userEvent.click(checkbox);
  expect(button).toBeDisabled();
});

it('popover responds to hover', async () => {
  render(<SummaryForm/>);
  //it is not show initially
  const nullPopover = screen.queryByText('No ice cream will actually be delievered');
  const termsAndConditions = screen.getByText( /Terms and conditions/i);
  expect(nullPopover).not.toBeInTheDocument();

  //it shows on mouseover
  const popover = screen.getByText('No ice cream will actually be delievered')
  userEvent.hover(termsAndConditions);
  expect(popover).toBeInTheDocument(); 

  //it desappears when we mouse out
  userEvent.unhover(termsAndConditions);
 await waitForElementToBeRemoved(() => 
  screen.queryByText(/No ice cream will actually be delievered/i)
 )
});