import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { forwardRef, ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { useDisableOnChange } from '../../../util/useDisableOnEvent';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  logo?: ReactNode;
  styles?: {
    input?: string;
    label?: string;
    checkboxWrapper?: string;
    checkIcon?: string;
    xMarkIcon?: string;
    logoWrapper?: string;
    labelText?: string;
  };
  enlargeOnMobile?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      children,
      defaultChecked = false,
      logo,
      styles,
      onChange = () => {},
      enlargeOnMobile = true,
      disabled = false,
      readOnly = false,
      ...props
    },
    ref,
  ) => {
    const [checked, setChecked] = useState(defaultChecked);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (readOnly) return;
      setChecked(!checked);
      onChange(event);
    };

    const onChangeWithDisabledHandler = useDisableOnChange(onChangeHandler, {
      disabled: disabled || readOnly,
    });

    return (
      <label
        className={twMerge(
          'relative flex select-none items-center text-left',
          styles?.label,
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={onChangeWithDisabledHandler}
          className={twMerge(
            `peer absolute top-1 opacity-0 [&:checked~span_.checkIcon]:visible`,
            enlargeOnMobile ? 'h-6 w-6 md:h-4 md:w-4' : 'h-4 w-4',
            styles?.input,
          )}
          disabled={disabled}
          readOnly={readOnly}
          {...props}
        />
        <span
          className={twMerge(
            'mr-2 flex items-center justify-center rounded border outline-offset-2 outline-default-black/60',
            enlargeOnMobile ? 'p-[3px] md:p-[1px]' : 'p-[1px]',
            disabled || readOnly
              ? ''
              : 'peer-checked:border-default-black peer-checked:bg-default-black',
            readOnly ? 'border-transparent' : 'border-gray-3 bg-white',
            disabled ? 'border-moon bg-moon' : 'peer-focus-visible:outline',
            styles?.checkboxWrapper,
          )}
        >
          {(!readOnly || defaultChecked) && (
            <CheckIcon
              className={twMerge(
                'checkIcon invisible',
                enlargeOnMobile ? 'h-4 w-4 md:h-3 md:w-3' : 'h-3 w-3',
                disabled || readOnly
                  ? 'stroke-black stroke-2'
                  : 'stroke-white stroke-[3px]',
                styles?.checkIcon,
              )}
            />
          )}
          {readOnly && !defaultChecked && (
            <XMarkIcon
              className={twMerge(
                'xMarkIcon stroke-black stroke-2',
                enlargeOnMobile ? 'h-4 w-4 md:h-3 md:w-3' : 'h-3 w-3',
                styles?.xMarkIcon,
              )}
            />
          )}
        </span>
        {logo && (
          <span
            className={twMerge(
              'mr-1 h-6 w-6 md:h-4 md:w-4',
              disabled ? 'opacity-50' : '',
              styles?.logoWrapper,
            )}
          >
            {logo}
          </span>
        )}
        <span
          className={twMerge(disabled ? 'opacity-50' : '', styles?.labelText)}
        >
          {children}
        </span>
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
