import { twMerge } from 'tailwind-merge';

export const Link = ({
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className={twMerge(
        'text-blue-link hover:underline hover:opacity-80',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

Link.displayName = 'Link';
