// HeroStoreMobile.tsx
import Link from 'next/link';
import Image from 'next/image';
import ImageCarousel from '@/components/ImageCarousel';
import { HeroStoreProps } from '../types';

export function HeroStoreMobile({
  imgBackground,
  imgLogo,
  title,
  subtitle,
  storeName,
  buttonLink,
  buttonText,
}: HeroStoreProps) {
  return (
    <div className='md:hidden relative w-full h-full flex flex-col items-center justify-center px-6'>
      {/* Background */}
      <div className='absolute inset-0 z-10'>
        <ImageCarousel
          images={imgBackground}
          overlayClassName='bg-[var(--background)] opacity-85 bg-[radial-gradient(ellipse_at_center,_transparent_80%,_rgba(0,0,0,0.3)_100%)]'
        />
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center text-center animate-fade-in'>
        {/* Branding */}
        <div className='flex items-center gap-3 mb-12'>
          {imgLogo && (
            <div className='relative w-8 h-8'>
              <Image src={imgLogo} alt='Logo' fill className='object-contain' />
            </div>
          )}
          <span className='text-xl font-light uppercase tracking-widest text-(--muted-foreground)'>
            {storeName}
          </span>
        </div>

        {/* Text */}
        <h1 className='text-8xl font-normal uppercase tracking-tighter leading-none mb-6'>
          {title}
        </h1>
        <p className='text-3xl font-light mb-20'>{subtitle}</p>

        {/* CTA */}
        <Link
          href={buttonLink}
          className='group inline-flex items-center gap-2 border border-(--foreground) rounded-full px-10 py-3 text-lg hover:bg-(--foreground) hover:text-[var(--background)] transition-colors'
        >
          {buttonText}
          <span className='group-hover:translate-x-1 transition-transform'>
            &gt;
          </span>
        </Link>
      </div>
    </div>
  );
}
