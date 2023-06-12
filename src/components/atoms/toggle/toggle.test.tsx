import { fireEvent, render, screen } from '@testing-library/react';

import { Toggle } from './toggle';

describe('<Toggle />', () => {
  it('renders a toggle', () => {
    expect(screen.queryByText(/I am Toggle/i)).not.toBeInTheDocument();
    render(<Toggle>I am Toggle</Toggle>);
    expect(screen.getByLabelText(/I am Toggle/i)).toBeInTheDocument();
  });

  describe('disabled', () => {
    it('renders a disabled toggle', () => {
      render(<Toggle disabled>Disabled</Toggle>);
      expect(screen.getByLabelText('Disabled')).toBeDisabled();
    });

    it('prevents onChange event from firing', () => {
      const onChange = jest.fn();

      render(
        <Toggle disabled onChange={onChange}>
          Disabled
        </Toggle>,
      );

      fireEvent.click(screen.getByLabelText('Disabled'));

      expect(onChange).toHaveBeenCalledTimes(0);
    });
  });
});
