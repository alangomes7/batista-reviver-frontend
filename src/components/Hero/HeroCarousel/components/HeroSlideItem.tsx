import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { HeroSlide } from '../data/types';

interface HeroSlideItemProps {
  slide: HeroSlide;
  index: number;
  currentIndex: number;
  overlayOpacity: string;
}

export const HeroSlideItem = ({
  slide,
  index,
  currentIndex,
  overlayOpacity,
}: HeroSlideItemProps) => {
  const isActive = index === currentIndex;

  return (
    <div className='relative min-w-full h-full'>
      <Link
        href={slide.href}
        className='relative block w-full h-full'
        draggable={false}
      >
        <div className='absolute inset-0 w-full h-full'>
          <Image
            src={slide.imageSrc}
            alt={slide.imageAlt || 'Banner Background'}
            fill
            priority={index === currentIndex || index === currentIndex + 1}
            className='object-cover select-none'
            draggable={false}
          />
          <div className={clsx('absolute inset-0', overlayOpacity)} />
        </div>

        {/* Gradient Overlay */}
        <div className='absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6),transparent_80%)]' />

        {/* Text Content */}
        <div className='relative z-20 h-full container mx-auto px-4 flex items-center justify-center text-center'>
          <div>
            <h1
              className={clsx(
                'text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6',
                'transition-all duration-900 ease-out transform',
                isActive
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12',
              )}
            >
              {slide.title}
              {slide.subtitle && (
                <>
                  <br />
                  <span className='text-primary-light'>{slide.subtitle}</span>
                </>
              )}
            </h1>
            {slide.description && (
              <p
                className={clsx(
                  'text-lg md:text-xl text-gray-200 max-w-2xl mx-auto',
                  'transition-all duration-700 delay-200 ease-out transform',
                  isActive
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12',
                )}
              >
                {slide.description}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
