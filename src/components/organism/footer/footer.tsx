import { ReactComponent as Discord } from '../../../../static/assets/discord.svg';
import { ReactComponent as Twitter } from '../../../../static/assets/twitter.svg';
import { ExternalLink } from '../../atoms/link';

type FooterLink = {
  title: string;
  href: string;
  lgOrder: number;
};

const footerLinks: FooterLink[] = [
  {
    title: 'Documentation',
    href: 'https://developer.offchainlabs.com/docs/developer_quickstart',
    lgOrder: 1,
  },
  {
    title: 'Careers',
    href: 'https://offchainlabs.com/careers',
    lgOrder: 4,
  },
  {
    title: 'Blog',
    href: 'https://medium.com/offchainlabs',
    lgOrder: 2,
  },
  {
    title: 'Recent Press',
    href: 'https://offchainlabs.com/#press',
    lgOrder: 5,
  },
  {
    title: 'ToS',
    href: '/tos',
    lgOrder: 3,
  },
];

export const Footer = () => {
  return (
    <footer className="z-10 flex justify-center md:px-8">
      <div className="max-w-site pt-20 pb-32 md:py-10 flex w-full flex-col space-y-8 text-white md:py-8">
        <div className="md:px-0 flex flex-col items-center space-y-2 text-center md:items-start">
          <span className="text-4xl">The most secure L2</span>
        </div>

        <div className="flex flex-col space-y-8">
          <ul className="grid text-center font-light md:max-w-[448px] md:grid-cols-3 md:grid-rows-2 md:text-left md:font-normal">
            {footerLinks.map((link) => (
              <li key={link.href} className={`md:order-${link.lgOrder}`}>
                <ExternalLink
                  href={link.href}
                  className="text-white hover:no-underline"
                >
                  {link.title}
                </ExternalLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-row justify-center space-x-6 fill-white">
            <ExternalLink
              href="https://discord.com/invite/ZpZuw7p"
              className="h-7 w-7"
            >
              <Discord className="w-full" />
            </ExternalLink>
            <ExternalLink
              href="https://twitter.com/OffchainLabs"
              className="h-7 w-7"
            >
              <Twitter className="w-full" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
