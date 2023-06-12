import { render, screen } from '@testing-library/react';

import { Tag } from './tag';

describe('<Tag />', () => {
  it('renders a Tag', () => {
    expect(screen.queryByText(/I am Tag/i)).not.toBeInTheDocument();
    render(<Tag>I am Tag</Tag>);
    expect(screen.queryByText(/I am Tag/i)).toBeInTheDocument();
  });

  it('renders correct tag styles of variant', () => {
    const { rerender } = render(<Tag>default</Tag>);
    const tag = screen.queryByText(/default/i);

    expect(tag).toHaveClass('text-gray-5');

    // lime
    rerender(<Tag variant="lime">lime</Tag>);

    expect(tag).toHaveClass('text-dark-lime');
    expect(tag).toHaveClass('bg-lime');

    // orange
    rerender(<Tag variant="orange">orange</Tag>);

    expect(tag).toHaveClass('text-dark-orange');
    expect(tag).toHaveClass('bg-orange');

    // brick
    rerender(<Tag variant="brick">brick</Tag>);

    expect(tag).toHaveClass('text-dark-brick');
    expect(tag).toHaveClass('bg-brick');

    // cyan
    rerender(<Tag variant="cyan">cyan</Tag>);

    expect(tag).toHaveClass('text-dark-cyan');
    expect(tag).toHaveClass('bg-cyan');

    // gray
    rerender(<Tag variant="gray">gray</Tag>);

    expect(tag).toHaveClass('text-gray-5');
  });
});
