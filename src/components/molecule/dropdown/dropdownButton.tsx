import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { cloneElement, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

export type DropdownButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: ReactElement;
  };

export const DropdownButton = ({
  icon,
  children,
  className,
}: DropdownButtonProps) => {
  return (
    <Popover.Button
      className={twMerge(
        'flex w-full min-w-[300px] items-center justify-between rounded-full border border-gray-50 bg-white py-[5px] pl-4 pr-2 text-default-black shadow-secondary lg:w-max',
        className,
      )}
    >
      <span className="flex items-center justify-center">
        <span className="p-0.5 flex items-center justify-center">
          {icon &&
            cloneElement(icon, { className: 'h-5 w-5 stroke-default-black' })}
          <span className="pl-1 leading-6">{children}</span>
        </span>
      </span>
      <span className="flex items-center justify-center p-1">
        <ChevronDownIcon className="h-4 w-4 stroke-default-black stroke-2" />
      </span>
    </Popover.Button>
  );
};

DropdownButton.displayName = 'DropdownButton';
