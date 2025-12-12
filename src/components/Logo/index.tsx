'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

type LogoProps = {
  className?: string;
};

const LOGO_BLACK = '/logo/Batista_Reviver-Logo_2026_png47.png'; // fallback / light
const LOGO_WHITE = '/logo/Batista_Reviver-Logo_2026_png41.png'; // dark
const LOGO_COLORED = '/logo/Batista_Reviver-Logo_2026_png43.png'; // root / special

export default function Logo({ className = '' }: LogoProps) {
  const { theme, mounted } = useTheme();

  // 1) BEFORE hydration → safe default
  if (!mounted) {
    return (
      <Image
        src={LOGO_BLACK}
        alt='Logo'
        width={2160}
        height={520}
        className={clsx(className)}
        style={{ width: 'auto', height: 'auto' }}
        priority
      />
    );
  }

  // 2) AFTER hydration → select correct logo
  let logoSrc = LOGO_BLACK; // default

  if (theme === 'dark') {
    logoSrc = LOGO_WHITE;
  } else if (theme === 'light') {
    logoSrc = LOGO_BLACK;
  } else if (theme === 'root') {
    logoSrc = LOGO_COLORED;
  }

  return (
    <Image
      src={logoSrc}
      alt='Logo'
      width={2160}
      height={520}
      className={clsx(className)}
    />
  );
}
