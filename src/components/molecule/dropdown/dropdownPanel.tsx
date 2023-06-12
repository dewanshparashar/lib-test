import { Popover } from '@headlessui/react';
import { ReactNode } from 'react';

export const DropdownPanel = ({ children }: { children: ReactNode }) => {
  return (
    <Popover.Panel className="top-0 left-0 fixed mt-4 flex max-h-[80vh] w-full max-w-[300px] flex-col overflow-auto rounded-lg bg-white p-4 shadow-secondary">
      {children}
    </Popover.Panel>
  );
};

DropdownPanel.displayName = 'DropdownPanel';
