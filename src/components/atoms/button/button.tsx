import React, { forwardRef, ReactNode } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { twMerge } from 'tailwind-merge';

import { useDisableOnClick } from '../../../util/useDisableOnEvent';

function getClassNameForVariant(
  variant: ButtonVariant,
  icon: ReactNode | undefined,
) {
  switch (variant) {
    case 'primary':
      return 'bg-default-black text-white hover:bg-default-black/70 [&:hover_.button-logo]:opacity-60 active:bg-default-black/80 disabled:bg-gray-4 disabled:text-white px-4';

    case 'secondary':
      return 'bg-white text-default-black border border-solid border-current hover:opacity-60 active:opacity-80 disabled:text-gray-4 disabled:opacity-100 px-4';

    case 'tertiary':
      if (icon) {
        return 'bg-white text-blue-link border-none hover:opacity-60 active:opacity-80 disabled:text-gray-4 disabled:hover:opacity-100';
      }
      return 'bg-white text-default-black border-none hover:opacity-60 active:opacity-80 disabled:text-gray-4 disabled:opacity-100 px-4';
  }
}

function getGapSize(
  icon: ReactNode | undefined,
  logo: ReactNode | undefined,
  isLarge: boolean,
  loading: boolean,
) {
  if ((icon || logo) && isLarge) {
    return 'gap-x-3';
  }
  if (loading && isLarge) {
    return 'gap-x-4';
  }
  if (icon && !isLarge) {
    return 'gap-x-1';
  }
  return 'gap-x-2';
}

const defaultClassName =
  'font-medium font-sans box-border w-max rounded-lg text-sm duration-[250ms] space-x-3 ease-in-out select-none leading-7 disabled:cursor-not-allowed h-[36px]';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'small' | 'large';

export type ButtonLoadingProps = Partial<{
  loaderColor: string;
  loaderWidth: string;
  loaderHeight: string;
}>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  loadingProps?: ButtonLoadingProps;
  textLeft?: boolean;
  icon?: ReactNode;
  logo?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size = 'small',
      loading = false,
      loadingProps,
      disabled = false,
      textLeft,
      className: customClassName,
      onClick = () => {},
      icon,
      logo,
      children,
      ...props
    },
    ref,
  ) => {
    const isLarge = size === 'large';
    const isPrimary = variant === 'primary';
    // disallow programmatically triggering onClick
    const onClickHandler = useDisableOnClick(onClick, {
      disabled: disabled || loading,
    });

    return (
      <button
        ref={ref}
        type="button"
        className={twMerge(
          defaultClassName,
          getClassNameForVariant(variant, icon),
          isLarge && 'h-[60px] px-6 py-3 text-2xl leading-6',
          customClassName,
        )}
        onClick={onClickHandler}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        <div
          className={`flex flex-row items-center justify-${
            textLeft ? 'start' : 'center'
          } ${getGapSize(icon, logo, isLarge, loading)}`}
        >
          {loading && (
            <TailSpin
              color={
                loadingProps?.loaderColor || isPrimary
                  ? 'white'
                  : 'var(--color-default-black)'
              }
              width={loadingProps?.loaderWidth || 16}
              height={loadingProps?.loaderHeight || 16}
            />
          )}
          {icon && (
            <div
              className={twMerge(
                isLarge ? 'w-6' : 'w-5',
                disabled ? 'opacity-50' : '',
              )}
            >
              {icon}
            </div>
          )}
          {logo && (
            <div
              className={twMerge(
                'button-logo',
                isLarge ? 'w-[36px]' : 'w-5',
                disabled ? 'opacity-50' : '',
              )}
            >
              {logo}
            </div>
          )}
          <span>{children}</span>
        </div>
      </button>
    );
  },
);

Button.displayName = 'Button';
