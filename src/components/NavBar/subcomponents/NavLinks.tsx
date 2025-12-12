import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { STYLES, NAV_LINKS, NavLink } from '../data/constants';

interface NavLinksProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export const NavLinks = ({ isMobile = false, onLinkClick }: NavLinksProps) => {
  const pathname = usePathname();

  // Helper to determine active state
  const isLinkActive = (href?: string) => {
    if (!href) return false;
    if (href.startsWith('http')) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // --- MOBILE RENDERER (Accordion) ---
  const MobileItem = ({ link }: { link: NavLink }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasSubLinks = link.subLinks && link.subLinks.length > 0;

    // Check if any child is active to auto-open or highlight parent
    const isChildActive =
      hasSubLinks && link.subLinks?.some(sub => isLinkActive(sub.href));

    if (hasSubLinks) {
      return (
        <div className='flex flex-col mb-1'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              isChildActive ? STYLES.activeMenuItem : STYLES.menuItem
            }`}
          >
            <span>{link.label}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Animated height or simple conditional render */}
          {(isOpen || isChildActive) && (
            <div className='flex flex-col mt-1 space-y-1 animate-fade-in'>
              {link.subLinks!.map(sub => (
                <Link
                  key={sub.label}
                  href={sub.href || '#'}
                  className={
                    isLinkActive(sub.href)
                      ? STYLES.mobileSubLinkActive
                      : STYLES.mobileSubLink
                  }
                  onClick={onLinkClick}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Standard Mobile Link
    return (
      <Link
        href={link.href || '#'}
        className={`${
          isLinkActive(link.href) ? STYLES.activeMenuItem : STYLES.menuItem
        } mb-1`}
        onClick={onLinkClick}
        target={link.external ? '_blank' : undefined}
      >
        {link.label}
      </Link>
    );
  };

  // --- DESKTOP RENDERER (Dropdown) ---
  const DesktopItem = ({ link }: { link: NavLink }) => {
    const hasSubLinks = link.subLinks && link.subLinks.length > 0;
    const isActive =
      isLinkActive(link.href) ||
      (hasSubLinks && link.subLinks?.some(sub => isLinkActive(sub.href)));

    if (hasSubLinks) {
      return (
        <div className={STYLES.dropdownTrigger}>
          {/* Parent Label */}
          <div
            className={`${
              isActive ? STYLES.activeNavLink : STYLES.navLink
            } cursor-default`}
          >
            {link.label}
            <ChevronDown className='w-3 h-3 opacity-50' />
          </div>

          {/* Dropdown Menu */}
          <div className={STYLES.dropdownContainer}>
            {link.subLinks!.map(sub => (
              <Link
                key={sub.label}
                href={sub.href || '#'}
                className={
                  isLinkActive(sub.href)
                    ? STYLES.dropdownItemActive
                    : STYLES.dropdownItem
                }
                target={sub.external ? '_blank' : undefined}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    // Standard Desktop Link
    return (
      <Link
        href={link.href || '#'}
        className={isActive ? STYLES.activeNavLink : STYLES.navLink}
        target={link.external ? '_blank' : undefined}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <>
      {NAV_LINKS.map(link => (
        <React.Fragment key={link.label}>
          {isMobile ? <MobileItem link={link} /> : <DesktopItem link={link} />}
        </React.Fragment>
      ))}
    </>
  );
};

// Simple Icon Component to avoid external dependency issues
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='m6 9 6 6 6-6' />
  </svg>
);
