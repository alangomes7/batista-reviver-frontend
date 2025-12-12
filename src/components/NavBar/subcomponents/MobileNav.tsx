import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinks } from './NavLinks';
import { AuthButtons } from './AuthButtons';
import { STYLES } from '../data/constants';
import { useNavUiStore } from '../stores/useNavUiStore';
import { NavRefs, SessionData } from '../data/types';

interface MobileNavProps {
  session: SessionData;
  refs: NavRefs;
  onClose: () => void;
  onLogout: () => void;
}

export const MobileNav = ({
  session,
  refs,
  onClose,
  onLogout,
}: MobileNavProps) => {
  const pathname = usePathname();
  const store = useNavUiStore();

  if (!store.mounted || (!store.isOpen && !store.isClosing)) return null;

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm flex justify-end ${
        store.isClosing ? 'animate-fade-out' : 'animate-fade-in'
      }`}
    >
      <div className='flex-1' onClick={onClose} />

      <div
        className={`w-3/4 sm:w-2/5 h-full bg-background border-l border-border shadow-xl p-4 space-y-2 overflow-y-auto ${
          store.isClosing ? 'animate-slide-out' : 'animate-slide-in'
        }`}
      >
        <NavLinks isMobile onLinkClick={onClose} />

        <Link
          href='/about'
          className={`${
            pathname === '/about' ? STYLES.activeMenuItem : STYLES.menuItem
          } border-t border-border mt-2`}
          onClick={onClose}
        >
          About
        </Link>

        <div className='border-t border-border pt-4 mt-2'>
          <AuthButtons session={session} onLogout={onLogout} isMobile />
        </div>
      </div>
    </div>
  );
};
