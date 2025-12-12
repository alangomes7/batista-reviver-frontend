'use client';

import { useNavSession } from './hooks/data/useNavSession';
import { useMenuHandler } from './hooks/handler/useMenuHandler';
import { useNavUiStore } from './stores/useNavUiStore';
import { DesktopNav } from './subcomponents/DesktopNav';
import { MobileNav } from './subcomponents/MobileNav';
import { MobileTopBar } from './subcomponents/MobileTopBar';
import ButtonTheme from '../ButtonTheme';

export default function NavBar() {
  const { isOpen, setIsOpen } = useNavUiStore();
  const { session, logout } = useNavSession();
  const { handleCloseMenu, refs } = useMenuHandler();

  return (
    <>
      {/* --- MOBILE TOP BAR --- */}
      <MobileTopBar
        onToggle={() => (isOpen ? handleCloseMenu() : setIsOpen(true))}
      />

      {/* --- DESKTOP TOP BAR --- */}
      <DesktopNav session={session} refs={refs} logout={logout} />

      {/* --- MOBILE DRAWER --- */}
      <MobileNav
        session={session}
        refs={refs}
        onClose={handleCloseMenu}
        onLogout={logout}
      />

      {/* --- FLOATING THEME BUTTON (MOBILE ONLY) --- */}
      <div className='block md:hidden fixed bottom-8 right-8 z-50'>
        <ButtonTheme />
      </div>
    </>
  );
}
