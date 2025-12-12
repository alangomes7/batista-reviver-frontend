import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinks } from './NavLinks';
import { STYLES } from '../data/constants';
import { NavRefs, SessionData } from '../data/types';

interface DesktopNavProps {
  session: SessionData;
  refs: NavRefs;
}

export const DesktopNav = ({ session, refs }: DesktopNavProps) => {
  const pathname = usePathname();

  return (
    // 'relative' ensures z-index context works for dropdowns
    <div className='hidden md:flex items-center space-x-1 relative'>
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
  );
};
