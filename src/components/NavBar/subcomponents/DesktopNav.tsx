'use client';

import { usePathname } from 'next/navigation';
import { useMemo, useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

// Data & Types
import { NAV_LINKS, NavLink, STYLES } from '../data/constants';
import { NavRefs, SessionData } from '../data/types';

// Components
import { NavLinks } from './NavLinks';
import { AuthButtons } from './AuthButtons';
import Logo from '../../Logo';
import ButtonTheme from '../../ButtonTheme';

interface DesktopNavProps {
  session: SessionData | null;
  refs: NavRefs;
  logout: () => void;
}

export const DesktopNav = ({ session, refs, logout }: DesktopNavProps) => {
  const pathname = usePathname();

  // --- Logic Moved from NavBar ---

  // Dynamic logic to determine if it's a Landing Page based on data
  const isLandingPage = useMemo(() => {
    if (pathname === '/') return true;

    const checkLanding = (links: NavLink[]): boolean => {
      return links.some(link => {
        if (link.href === pathname && link.landing) return true;
        if (link.subLinks?.length) return checkLanding(link.subLinks);
        return false;
      });
    };

    return checkLanding(NAV_LINKS);
  }, [pathname]);

  // Scroll & Visibility Logic
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 10;

      // 1. Determine if at the top (for transparency)
      if (currentScrollY < 50) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);

        // 2. Determine scroll direction for Hide/Show
        if (Math.abs(currentScrollY - lastScrollY.current) > threshold) {
          if (currentScrollY > lastScrollY.current) {
            setIsVisible(false); // Scroll Down -> Hide
          } else {
            setIsVisible(true); // Scroll Up -> Show
          }
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine Styles
  const isTransparent = isLandingPage && isAtTop;

  return (
    <nav
      ref={refs.navRef}
      className={clsx(
        'hidden md:flex w-full z-50 transition-all duration-300 ease-in-out',
        // Position: Fixed for landing effect, Sticky for standard pages
        isLandingPage ? 'fixed top-0 left-0' : 'sticky top-0',
        // Visibility Transform
        isVisible ? 'translate-y-0' : '-translate-y-full',
        // Background & Border Styles
        isTransparent
          ? 'bg-linear-to-b from-black/60 to-transparent border-transparent shadow-none'
          : 'bg-background/95 backdrop-blur-md border-b-transparent border-border shadow-sm',
      )}
    >
      <div className='container relative mx-auto min-h-18 px-4 flex items-center justify-between'>
        {/* CENTER — LOGO + LINKS */}
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-8'>
          <Link href={'/'} className='block shrink-0'>
            <Logo
              className={clsx(
                'h-9 w-auto',
                isTransparent ? 'text-white' : 'text-foreground',
              )}
            />
          </Link>
          <div
            className={clsx(
              'flex items-center gap-6 whitespace-nowrap transition-colors duration-300',
              isTransparent ? 'text-white/90' : 'text-foreground',
            )}
          >
            <NavLinks />
            <Link
              href='/about'
              className={
                pathname === '/about' ? STYLES.activeNavLink : STYLES.navLink
              }
            >
              About
            </Link>
          </div>
        </div>

        {/* RIGHT — THEME + AUTH */}
        <div className='flex items-center gap-4 ml-auto'>
          <ButtonTheme />
          <AuthButtons session={session} onLogout={logout} />
        </div>
      </div>
    </nav>
  );
};
