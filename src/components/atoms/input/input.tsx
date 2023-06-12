import { twMerge } from 'tailwind-merge';
import { forwardRef, ReactNode, useState } from 'react';
import { useDisableOnChange } from '../../../util/useDisableOnEvent';

type Variant = 'normal' | 'pill';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string;
  isError?: boolean;
  icon?: ReactNode;
  variant?: Variant;
  styles?: {
    input?: string;
  };
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      placeholder,
      className,
      errorMessage,
      isError = false,
      icon,
      variant = 'normal',
      styles,
      disabled = false,
      onChange = () => {},
      ...props
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useState(value);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
      onChange(event);
    };

    const onChangeWithDisabledHandled = useDisableOnChange(onChangeHandler, {
      disabled,
    });

    return (
      <div>
        <label
          className={twMerge(
            'flex h-full items-center border border-line-gray bg-white pl-3 pr-4 shadow-secondary placeholder:text-default-black',
            variant === 'normal' ? 'rounded-lg' : 'rounded-full',
            disabled ? 'bg-gray-3' : '',
            isError ? 'border-brick' : '',
            className,
          )}
        >
          {icon}
          <input
            ref={ref}
            className={twMerge(
              'h-full w-full bg-transparent pl-1 leading-7 text-default-black outline-none disabled:text-default-black',
              variant === 'normal' ? 'py-[11px]' : 'py-[7px]',
              styles?.input,
            )}
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={onChangeWithDisabledHandled}
            disabled={disabled}
            {...props}
          />
        </label>
        {isError && (
          <p className="text-sm leading-5 text-brick">{errorMessage}</p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
