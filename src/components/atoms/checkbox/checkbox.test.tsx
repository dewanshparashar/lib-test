import { fireEvent, render, screen } from '@testing-library/react';

import { Checkbox } from './checkbox';

describe('<Checkbox />', () => {
  it('renders a semantic checkbox', () => {
    expect(screen.queryByText(/I am Checkbox/i)).not.toBeInTheDocument();
    render(<Checkbox>I am Checkbox</Checkbox>);
    expect(
      screen.getByRole('checkbox', { name: /I am Checkbox/i }),
    ).toBeInTheDocument();
  });

  describe('disabled', () => {
    it('renders a disabled checkbox', () => {
      render(<Checkbox disabled>Disabled</Checkbox>);
      const checkbox = screen.getByLabelText(/Disabled/);
      const labelText = checkbox.parentElement?.lastChild;

      expect(screen.getByLabelText('Disabled')).toBeDisabled();
      expect(labelText).not.toHaveClass('hover:font-medium');
    });

    it('prevents onChange event from firing', () => {
      const onChange = jest.fn();

      render(
        <Checkbox disabled onChange={onChange}>
          Disabled
        </Checkbox>,
      );

      fireEvent.click(screen.getByLabelText('Disabled'));

      expect(onChange).toHaveBeenCalledTimes(0);
    });
  });

  it('renders a checkbox with logo', () => {
    render(
      <Checkbox logo={<img alt="logo" data-testid="logo" />}>
        I have a logo
      </Checkbox>,
    );
    const logo = screen.getByTestId('logo');
    const checkbox = screen.getByLabelText(/I have a logo/);
    const checkboxLabel = checkbox.parentElement;
    expect(checkboxLabel).toContainElement(logo);
  });

  it('renders a readonly checkbox', () => {
    const onChange = jest.fn();

    render(
      <Checkbox readOnly onChange={onChange}>
        cd-rom
      </Checkbox>,
    );
    const checkbox = screen.getByLabelText(/cd-rom/);
    const prettyCheckbox = checkbox.nextSibling;
    expect(prettyCheckbox).not.toHaveClass('peer-checked:border-default-black');
    expect(prettyCheckbox).not.toHaveClass('peer-checked:bg-default-black');
    expect(prettyCheckbox).toHaveClass('border-transparent');
    expect(prettyCheckbox).not.toHaveClass('border-gray-3');
    expect(prettyCheckbox).not.toHaveClass('bg-white');
    expect(prettyCheckbox?.firstChild).toHaveClass('stroke-black');
    expect(prettyCheckbox?.firstChild).not.toHaveClass('stroke-white');
    expect(checkbox).not.toBeChecked();
    fireEvent.change(screen.getByLabelText('cd-rom'));
    expect(checkbox).not.toBeChecked();
    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
