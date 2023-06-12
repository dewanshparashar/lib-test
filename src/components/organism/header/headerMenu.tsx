import React from 'react';
import { Disclosure, Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import { ExternalLink } from '../../atoms/link/externalLink';

export type HeaderMenuItem = {
  title: string;
  anchorProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  items?: HeaderMenuItem[];
};

export type HeaderMenuProps = {
  items: HeaderMenuItem[];
};

export function HeaderMenuDesktop(
  props: HeaderMenuProps & { children: React.ReactNode },
) {
  return (
    <Popover as="div" className="relative inline-block text-left">
      <div>
        <Popover.Button className="arb-hover hidden items-center rounded-md text-base text-white lg:inline-flex lg:p-1">
          {props.children}

          {props.items?.length && (
            <ChevronDownIcon className="ml-1 h-4 w-4 shrink-0 grow-0 text-white" />
          )}
        </Popover.Button>
      </div>

      <Popover.Panel className="w-80 absolute -left-4 z-50 mt-4 rounded-md bg-white shadow-lg">
        <div className="px-6 py-4">
          {props.items.map((item, index) => {
            if (typeof item.anchorProps !== 'undefined') {
              return (
                <ExternalLink
                  key={index}
                  {...item.anchorProps}
                  className="hover:bg-darker-blue -mx-6 block cursor-pointer px-6 py-1 font-medium hover:text-white"
                >
                  {item.title}
                </ExternalLink>
              );
            }

            const subitems = item.items || [];

            return (
              <div key={index}>
                <div className="py-1">
                  <span className="font-medium">{item.title}</span>
                </div>
                <div>
                  {subitems.map((subitem, sIndex) => (
                    <ExternalLink
                      key={`${index}.${sIndex}`}
                      href={subitem.anchorProps?.href}
                      className="pl-10 hover:bg-darker-blue -mx-6 block py-1 pr-6 font-light hover:text-white"
                    >
                      {subitem.title}
                    </ExternalLink>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Popover.Panel>
    </Popover>
  );
}

export function HeaderMenuMobile(
  props: HeaderMenuProps & { children: React.ReactNode },
) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="w-full">
          <Disclosure.Button
            className={`flex w-full items-center justify-center py-3 hover:opacity-80 ${
              open && 'bg-white'
            }`}
          >
            <span
              className={`text-2xl font-medium ${
                open ? 'text-darker-blue' : 'text-white'
              }`}
            >
              {props.children}
            </span>

            {props.items?.length && (
              <ChevronDownIcon className="ml-2 h-4 w-4 shrink-0 grow-0 text-white" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel>
            <ul className="space-y-4 pb-8 pt-4">
              {props.items.map((item, index) => (
                <li
                  key={index}
                  className="text-center text-2xl font-light text-white"
                >
                  <ExternalLink
                    href={item.anchorProps?.href}
                    className="block w-full hover:no-underline"
                  >
                    {item.title}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
