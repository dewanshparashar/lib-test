import { ReactNode, useState } from 'react';
import { Switch } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

export type ToggleProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children: ReactNode;
  defaultChecked?: boolean;
  styles?: {
    switchBox?: string;
    switchButton?: string;
    label?: string;
    text?: string;
  };
  onChange?: () => void;
  disabled?: boolean;
};

export const Toggle = ({
  children,
  defaultChecked = false,
  disabled = false,
  onChange = () => {},
  styles,
}: ToggleProps) => {
  const [enabled, setEnabled] = useState(defaultChecked);

  const onChangeHandler = () => {
    setEnabled(!enabled);
    onChange();
  };

  return (
    <Switch.Group>
      <div
        className={twMerge(
          'relative flex items-center text-left',
          styles?.label,
        )}
      >
        <Switch
          checked={enabled}
          onChange={onChangeHandler}
          className={twMerge(
            'duration-400 relative h-4 w-7 cursor-pointer rounded-full bg-moon outline-offset-2 outline-default-black/60 transition-all',
            disabled
              ? 'cursor-not-allowed ui-checked:bg-default-black/50'
              : 'ui-checked:bg-default-black',
            styles?.switchBox,
          )}
          disabled={disabled}
        >
          <span
            className={twMerge(
              'duration-400 absolute left-[3px] top-[3px] h-[10px] w-[10px] rounded-full transition-all ui-checked:left-[19px]',
              disabled ? 'bg-gray-4' : 'bg-white shadow-toggle-button',
              styles?.switchButton,
            )}
          />
        </Switch>
        <Switch.Label
          className={twMerge(
            'ml-2 select-none',
            disabled ? 'text-dark-gray/50' : '',
            styles?.text,
          )}
        >
          {children}
        </Switch.Label>
      </div>
    </Switch.Group>
  );
};

Toggle.displayName = 'Toggle';
