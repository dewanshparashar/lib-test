import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
} from 'react';

export const useDisableOnClick = (
  clickHandler: MouseEventHandler<Element>,
  { disabled }: { disabled: boolean },
) => {
  const disabledClickHandler = (event: MouseEvent<Element>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  if (!disabled) {
    return clickHandler;
  }

  return disabledClickHandler;
};

export const useDisableOnChange = (
  changeHandler: ChangeEventHandler<Element>,
  { disabled }: { disabled: boolean },
) => {
  const disabledChangeHandler = (event: ChangeEvent<Element>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  if (!disabled) {
    return changeHandler;
  }

  return disabledChangeHandler;
};
