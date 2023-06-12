import { twMerge } from 'tailwind-merge';

type Variant = 'lime' | 'orange' | 'brick' | 'cyan' | 'gray';

export type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: Variant;
};

const variantStyles = (variantName: Variant) => {
  switch (variantName) {
    case 'lime':
      return 'text-dark-lime bg-lime';
    case 'orange':
      return 'text-dark-orange bg-orange';
    case 'brick':
      return 'text-dark-brick bg-brick';
    case 'cyan':
      return 'text-dark-cyan bg-cyan';
    case 'gray':
    default:
      return 'text-gray-5';
  }
};

export const Tag = ({
  children,
  className,
  variant = 'gray',
  role = 'note',
  ...props
}: TagProps) => {
  return (
    <span
      className={twMerge(
        `inline-block cursor-default rounded-full px-3 py-1 text-sm leading-7`,
        variantStyles(variant),
        className,
      )}
      tabIndex={0}
      role={role}
      {...props}
    >
      {children}
    </span>
  );
};

Tag.displayName = 'Tag';
