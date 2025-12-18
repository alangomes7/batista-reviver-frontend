// HeroStoreDesktop.tsx
import Link from 'next/link';
import Image from 'next/image';
import ImageCarousel from '@/components/ImageCarousel';
import { HeroStoreProps } from '../types';

export function HeroStoreDesktop({
  imgBackground,
  imgLogo,
  title,
  subtitle,
  storeName,
  buttonLink,
  buttonText,
}: HeroStoreProps) {
  return (
    <div className='hidden md:flex w-full h-full'>
      {/* Left: Content */}
      <div className='w-1/2 h-full flex flex-col justify-center items-center p-16 xl:p-24 z-10'>
        <div className='max-w-lg w-full text-center flex flex-col items-center'>
          {/* Branding */}
          <div className='flex items-center gap-4 mb-16'>
            {imgLogo && (
              <div className='relative w-8 h-8'>
                <Image
                  src={imgLogo}
                  alt='Logo'
                  fill
                  className='object-contain'
                />
              </div>
            )}
            <span className='text-lg uppercase tracking-widest'>
              {storeName}
            </span>
          </div>

          {/* Text */}
          <h1 className='text-8xl xl:text-9xl uppercase tracking-tighter leading-none mb-6'>
            {title}
          </h1>
          <p className='text-3xl font-light text-(--muted-foreground) mb-16'>
            {subtitle}
          </p>

          {/* CTA */}
          <Link
            href={buttonLink}
            className='group inline-flex items-center gap-2 border border-(--foreground) rounded-full px-12 py-3 text-xl hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all'
          >
            {buttonText}
            <span className='group-hover:translate-x-1 transition-transform'>
              &gt;
            </span>
          </Link>
        </div>
      </div>

      {/* Right: Carousel */}
      <div className='w-1/2 h-full relative p-6 lg:p-10 scale-90'>
        <div className='relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl'>
          <ImageCarousel images={imgBackground} />
        </div>
      </div>
    </div>
  );
}
