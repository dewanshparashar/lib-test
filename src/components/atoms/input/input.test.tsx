import { fireEvent, render, screen } from '@testing-library/react';

import { Input } from './input';

describe('<Input />', () => {
  it('renders a semantic input', () => {
    expect(screen.queryByText(/Test Input/)).not.toBeInTheDocument();
    render(<Input placeholder="Test Input" />);
    expect(screen.getByPlaceholderText(/Test Input/)).toBeInTheDocument();
  });

  it('renders correct input styles of variant', () => {
    const { rerender } = render(<Input placeholder="Not pill" />);
    const input = screen.getByPlaceholderText(/Not pill/);

    expect(input).toHaveClass('py-[11px]');
    expect(input).not.toHaveClass('py-[7px]');
    expect(input.parentElement).toHaveClass('rounded-lg');
    expect(input.parentElement).not.toHaveClass('rounded-full');

    // pill shaped
    rerender(<Input variant="pill" />);

    expect(input).not.toHaveClass('py-[11px]');
    expect(input).toHaveClass('py-[7px]');
    expect(input.parentElement).not.toHaveClass('rounded-lg');
    expect(input.parentElement).toHaveClass('rounded-full');
  });

  describe('disabled', () => {
    it('renders a disabled input', () => {
      render(<Input disabled placeholder="you cannot type in me" />);
      const input = screen.getByPlaceholderText(/you cannot type in me/);

      expect(input).toBeDisabled();
      expect(input.parentElement).toHaveClass('bg-gray-3');
    });

    it('prevents onChange event from firing', () => {
      const onChange = jest.fn();

      render(<Input disabled onChange={onChange} placeholder="no typing" />);

      fireEvent.click(screen.getByPlaceholderText(/no typing/));

      expect(onChange).toHaveBeenCalledTimes(0);
    });
  });

  it('renders an input with icon', () => {
    render(
      <Input
        icon={<img alt="icon" data-testid="icon" />}
        placeholder="with an icon"
      />,
    );
    const icon = screen.getByTestId('icon');
    const input = screen.getByPlaceholderText(/with an icon/);
    const inputLabel = input.parentElement;
    expect(inputLabel).toContainElement(icon);
  });

  it('renders an input with error message when isError is true', () => {
    render(
      <Input
        placeholder="nah nah nah"
        isError={true}
        errorMessage="this input says your input is invalid"
      />,
    );
    const input = screen.getByPlaceholderText(/nah nah nah/);
    const errorMessage = input.parentElement?.nextSibling;
    expect(errorMessage?.textContent).toEqual(
      'this input says your input is invalid',
    );
  });

  it('does not render error message when isError is false', () => {
    render(
      <Input
        placeholder="nah nah nah"
        isError={false}
        errorMessage="this input says your input is invalid"
      />,
    );
    const input = screen.getByPlaceholderText(/nah nah nah/);
    const errorMessage = input.parentElement?.nextSibling;
    expect(errorMessage).toBeNull();
  });
});
