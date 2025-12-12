'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef, useMemo } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import clsx from 'clsx';

// Data & Stores
import { NAV_LINKS, NavLink } from '../data/constants';
import { useNavUiStore } from '../stores/useNavUiStore';

// Components
import Logo from '../../Logo';

interface MobileTopBarProps {
  onToggle: () => void;
}

export const MobileTopBar = ({ onToggle }: MobileTopBarProps) => {
  const pathname = usePathname();
  const { isOpen, mounted } = useNavUiStore();

  // --- Smart Logic (Same as Desktop) ---

  // 1. Detect Landing Page
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

  // 2. Scroll & Visibility State
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 10;

      // At Top Detection
      if (currentScrollY < 50) {
        setIsAtTop(true);
        setIsVisible(true);
      } else {
        setIsAtTop(false);

        // Hide/Show on Scroll (Only if menu is NOT open)
        if (
          !isOpen &&
          Math.abs(currentScrollY - lastScrollY.current) > threshold
        ) {
          setIsVisible(currentScrollY < lastScrollY.current);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  // Force visibility if menu is open
  const showNav = isVisible || isOpen;

  // Transparent only if: Landing Page + At Top + Menu Closed
  const isTransparent = isLandingPage && isAtTop && !isOpen;

  return (
    <nav
      className={clsx(
        'md:hidden z-40 w-full transition-all duration-300 ease-in-out',
        // Position
        isLandingPage ? 'fixed top-0 left-0' : 'sticky top-0',
        // Visibility Transform
        showNav ? 'translate-y-0' : '-translate-y-full',
        // Styles
        isTransparent
          ? 'bg-linear-to-b from-black/60 to-transparent border-transparent shadow-none'
          : 'bg-background/95 backdrop-blur-md border-b-transparent border-border shadow-sm',
      )}
    >
      <div className='container mx-auto min-h-18 px-4 flex items-center justify-between'>
        {/* Menu Button */}
        <div>
          {!mounted ? (
            <div className='h-6 w-6' />
          ) : (
            <button
              onClick={onToggle}
              className={clsx(
                'focus:outline-none transition-colors duration-300',
                isTransparent ? 'text-white' : 'text-foreground',
              )}
            >
              {isOpen ? (
                <XIcon className='h-6 w-6' />
              ) : (
                <MenuIcon className='h-6 w-6' />
              )}
            </button>
          )}
        </div>

        {/* Logo */}
        <Link href={'/'}>
          <Logo className='h-8 w-auto' />
        </Link>
      </div>
    </nav>
  );
};
