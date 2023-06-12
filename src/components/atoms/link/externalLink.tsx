import { Link } from './link';

export const ExternalLink = ({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </Link>
  );
};

ExternalLink.displayName = 'ExternalLink';
