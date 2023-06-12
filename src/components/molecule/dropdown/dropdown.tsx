import { Popover } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

export const Dropdown = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Popover className={twMerge('relative z-50 w-full lg:w-max', className)}>
      {children}
    </Popover>
  );
};

Dropdown.displayName = 'Dropdown';
