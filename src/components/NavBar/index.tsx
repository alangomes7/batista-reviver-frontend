'use client';

import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon } from 'lucide-react';
import clsx from 'clsx';
import { useMemo } from 'react'; // Adicionado useMemo

// Hooks
import { useNavSession } from './hooks/data/useNavSession';
import { useMenuHandler } from './hooks/handler/useMenuHandler';
import { useNavUiStore } from './stores/useNavUiStore';

// Data
import { NAV_LINKS, NavLink } from './data/constants'; // Importação das constantes

// Components
import { DesktopNav } from './subcomponents/DesktopNav';
import { MobileNav } from './subcomponents/MobileNav';
import { AuthButtons } from './subcomponents/AuthButtons';
import ButtonTheme from '../ButtonTheme';
import Logo from '../Logo';
import Link from 'next/link';

export default function NavBar() {
  const pathname = usePathname();

  // Lógica dinâmica para determinar se é uma Landing Page baseada nos dados
  const isLanding = useMemo(() => {
    // A home sempre é considerada landing page
    if (pathname === '/') return true;

    // Função auxiliar para verificar recursivamente a propriedade 'landing'
    const checkLanding = (links: NavLink[]): boolean => {
      return links.some(link => {
        // Verifica se o link atual corresponde à rota e tem landing: true
        if (link.href === pathname && link.landing) return true;

        // Se tiver subLinks, verifica recursivamente
        if (link.subLinks && link.subLinks.length > 0) {
          return checkLanding(link.subLinks);
        }

        return false;
      });
    };

    return checkLanding(NAV_LINKS);
  }, [pathname]);

  const { isOpen, setIsOpen, mounted } = useNavUiStore();
  const { session, logout } = useNavSession();
  const { handleCloseMenu, refs } = useMenuHandler();

  return (
    <>
      <nav
        ref={refs.navRef}
        className={clsx(
          'z-50 transition-all duration-300 w-full',
          isLanding
            ? 'fixed top-0 left-0 bg-linear-to-b from-black/60 to-transparent'
            : 'sticky top-0 bg-background border-b border-border',
        )}
      >
        {/* Added 'relative' here so the absolute child positions relative to this container */}
        <div className='container relative mx-auto min-h-[72px] px-4 flex items-center justify-between'>
          {/* LEFT — MOBILE MENU BUTTON */}
          <div className='flex md:hidden'>
            {!mounted ? (
              <div className='h-6 w-6' />
            ) : (
              <button
                onClick={() => (isOpen ? handleCloseMenu() : setIsOpen(true))}
                className={clsx(
                  'focus:outline-none transition-colors',
                  isLanding ? 'text-white' : 'text-foreground',
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

          {/* CENTER — DESKTOP LOGO + NAV */}
          {/* Changed: Used absolute positioning to center this block perfectly */}
          <div className='hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8'>
            <Link href={'/'}>
              <Logo className='h-8 w-auto md:h-9' />
            </Link>
            <div
              className={clsx(
                'flex items-center gap-6 whitespace-nowrap',
                isLanding ? 'text-white/90' : 'text-foreground',
              )}
            >
              <DesktopNav session={session} refs={refs} />
            </div>
          </div>

          {/* RIGHT — THEME + AUTH (DESKTOP ONLY) */}
          {/* Because the parent is justify-between, this naturally sticks to the right */}
          <div className='hidden md:flex items-center gap-4 ml-auto'>
            <ButtonTheme />
            <AuthButtons session={session} onLogout={logout} />
          </div>
        </div>

        {/* MOBILE LEFT DRAWER */}
        <MobileNav
          session={session}
          refs={refs}
          onClose={handleCloseMenu}
          onLogout={logout}
        />
      </nav>

      {/* FLOATING THEME BUTTON (MOBILE ONLY) */}
      <div className='block md:hidden fixed bottom-8 right-8 z-50'>
        <ButtonTheme />
      </div>
    </>
  );
}
