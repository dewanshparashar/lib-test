import { fireEvent, render, screen } from '@testing-library/react';
import { ArrowSmallLeftIcon } from '@heroicons/react/20/solid';

import { Button } from '../button';

describe('<Button />', () => {
  it('renders a semantic button', () => {
    expect(screen.queryByText('Imma Button')).not.toBeInTheDocument();
    render(<Button variant="primary">Imma Button</Button>);
    expect(
      screen.getByRole('button', { name: 'Imma Button' }),
    ).toBeInTheDocument();
  });

  it('renders correct button styles of variant', () => {
    const { rerender } = render(<Button variant="primary">Cool Button</Button>);
    const button = screen.getByRole('button', { name: 'Cool Button' });

    // Primary
    expect(button).toHaveClass('bg-default-black');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('hover:bg-default-black/70');
    expect(button).toHaveClass('[&:hover_.button-logo]:opacity-60');
    expect(button).toHaveClass('active:bg-default-black/80');
    expect(button).toHaveClass('disabled:bg-gray-4');
    expect(button).toHaveClass('disabled:text-white');
    expect(button).toHaveClass('px-4 h-[36px]');

    // Secondary
    rerender(<Button variant="secondary">Cool Button</Button>);

    expect(button).toHaveClass('bg-white');
    expect(button).toHaveClass('text-default-black');
    expect(button).toHaveClass('hover:opacity-60');
    expect(button).toHaveClass('active:opacity-80');
    expect(button).toHaveClass('border');
    expect(button).toHaveClass('border-solid');
    expect(button).toHaveClass('border-current');
    expect(button).toHaveClass('disabled:text-gray-4');
    expect(button).toHaveClass('px-4 h-[36px]');

    // Tertiary
    rerender(<Button variant="tertiary">Cool Button</Button>);

    expect(button).toHaveClass('bg-white');
    expect(button).toHaveClass('text-default-black');
    expect(button).toHaveClass('border-none');
    expect(button).toHaveClass('hover:opacity-60');
    expect(button).toHaveClass('active:opacity-80');
    expect(button).toHaveClass('disabled:text-gray-4');
    expect(button).toHaveClass('px-4 h-[36px]');
    expect(button.firstChild).toHaveClass('gap-x-2');

    // Tertiary with Icon
    rerender(
      <Button
        variant="tertiary"
        icon={<ArrowSmallLeftIcon data-testid="icon" />}
      >
        Cool Button
      </Button>,
    );

    expect(button).toHaveClass('bg-white');
    expect(button).toHaveClass('text-blue-link');
    expect(button).toHaveClass('border-none');
    expect(button).toHaveClass('hover:opacity-60');
    expect(button).toHaveClass('active:opacity-80');
    expect(button).toHaveClass('disabled:text-gray-4');
    expect(button).toHaveClass('disabled:hover:opacity-100');
    expect(button).not.toHaveClass('px-4 h-[36px]');
    expect(button.firstChild).not.toHaveClass('gap-x-2');
    expect(button.firstChild).not.toHaveClass('gap-x-3');
    expect(button.firstChild).not.toHaveClass('gap-x-4');

    // Tertiary with Icon, Large Button
    rerender(
      <Button
        variant="tertiary"
        icon={<ArrowSmallLeftIcon data-testid="icon" />}
        size="large"
      >
        Cool Button
      </Button>,
    );
    expect(button).toHaveClass('h-[60px]');
    expect(button).toHaveClass('leading-6');
    expect(button.firstChild).toHaveClass('gap-x-3');
    expect(button.firstChild?.firstChild).toHaveClass('w-6');

    // Tertiary Large Button
    rerender(
      <Button variant="tertiary" loading size="large">
        Cool Button
      </Button>,
    );
    expect(button).toHaveClass('h-[60px]');
    expect(button).toHaveClass('leading-6');
    expect(button.firstChild).toHaveClass('gap-x-4');

    // Tertiary with Icon
    rerender(
      <Button
        variant="tertiary"
        icon={<ArrowSmallLeftIcon data-testid="icon" />}
        loading
      >
        Cool Button
      </Button>,
    );
    expect(button.firstChild).not.toHaveClass('gap-x-2');
    expect(button.firstChild).not.toHaveClass('gap-x-4');
    expect(button.firstChild).not.toHaveClass('gap-x-5');
    expect(button.firstChild?.childNodes[1]).toHaveClass('w-5');

    // Primary with Logo, Large Button
    rerender(
      <Button
        variant="primary"
        size="large"
        logo={<img alt="logo" data-testid="logo" />}
      >
        Cool Button
      </Button>,
    );
    expect(button).toHaveClass('px-6 h-[60px]');
    expect(button.firstChild?.firstChild).toHaveClass('w-[36px]');
  });

  describe('disabled', () => {
    it('renders a disabled button', () => {
      render(
        <Button variant="tertiary" disabled>
          Disabled
        </Button>,
      );
      expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
    });

    it('prevents onClick event from firing', () => {
      const onClick = jest.fn();

      render(
        <Button variant="tertiary" onClick={onClick} disabled>
          Disabled
        </Button>,
      );

      fireEvent.click(screen.getByRole('button', { name: 'Disabled' }));

      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });

  describe('loading', () => {
    it('renders a button with loading', () => {
      render(
        <Button variant="tertiary" loading>
          I am loading
        </Button>,
      );
      const loadingIcon = screen.getByTestId('tail-spin-loading');
      expect(
        screen.getByRole('button', { name: /I am loading/ }),
      ).toContainElement(loadingIcon);
    });

    it('prevents onClick event from firing', () => {
      const onClick = jest.fn();

      render(
        <Button variant="tertiary" onClick={onClick} loading>
          I am loading
        </Button>,
      );

      fireEvent.click(screen.getByRole('button', { name: /I am loading/ }));

      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });

  it('renders a button with icon', () => {
    render(
      <Button
        variant="tertiary"
        icon={<ArrowSmallLeftIcon data-testid="icon" />}
      >
        I have an icon
      </Button>,
    );
    const icon = screen.getByTestId('icon');
    expect(
      screen.getByRole('button', { name: 'I have an icon' }),
    ).toContainElement(icon);
  });

  it('renders a button with logo', () => {
    render(
      <Button variant="tertiary" logo={<img alt="logo" data-testid="logo" />}>
        I have a logo
      </Button>,
    );
    const logo = screen.getByTestId('logo');
    const button = screen.getByRole('button', { name: /I have a logo/ });
    expect(button).toContainElement(logo);
    expect(button.firstChild?.firstChild).toHaveClass('w-5');
  });

  it('renders a button with left-aligned text', () => {
    render(
      <Button variant="tertiary" textLeft>
        Align left
      </Button>,
    );
    expect(
      screen.getByRole('button', { name: 'Align left' }).firstChild,
    ).toHaveClass('justify-start');
  });

  it('renders a button with center-aligned text', () => {
    render(<Button variant="tertiary">Align center</Button>);
    expect(
      screen.getByRole('button', { name: 'Align center' }).firstChild,
    ).toHaveClass('justify-center');
  });

  it('renders a button with loading with a #ff0000 loader color', () => {
    render(
      <Button
        variant="tertiary"
        loading
        loadingProps={{ loaderColor: '#ff0000' }}
      >
        I am loading
      </Button>,
    );
    const loadingIcon = screen.getByTestId('tail-spin-loading');
    expect(
      screen.getByRole('button', { name: /I am loading/ }),
    ).toContainElement(loadingIcon);
  });

  it('renders a button with loading with a #ff0000 loader color', () => {
    render(
      <Button
        variant="tertiary"
        loading
        loadingProps={{ loaderColor: '#ff0000' }}
      >
        I am loading
      </Button>,
    );
    const loadingIcon = screen.getByTestId('tail-spin-loading');
    expect(
      screen.getByRole('button', { name: /I am loading/ }),
    ).toContainElement(loadingIcon);
  });

  it('fires onClick event on click', () => {
    const onClick = jest.fn();

    render(
      <Button variant="tertiary" onClick={onClick}>
        CLICK HERE
      </Button>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'CLICK HERE' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('accepts className passed in', () => {
    render(
      <Button variant="tertiary" className="random">
        shiny class
      </Button>,
    );

    expect(screen.getByRole('button', { name: 'shiny class' })).toHaveClass(
      'random',
    );
  });
});
