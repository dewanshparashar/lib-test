import { Moon } from '../atoms/moon';
import { Footer } from '../organism/footer';

export const Layout = ({ children }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-space bg-repeat font-light">
      {/* <Header /> */}
      <div className="z-20 flex min-h-[calc(100vh-80px)] grow flex-col bg-gradient-overlay">
        <main>{children}</main>
      </div>
      <Footer />
      <Moon />
    </div>
  );
};

Layout.displayName = 'Layout';
