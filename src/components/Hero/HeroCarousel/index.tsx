'use client';

import { useState, useEffect, useCallback, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface HeroSlide {
  id: string | number;
  imageSrc: string;
  href: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
  className?: string;
  overlayOpacity?: string;
}

export default function HeroCarousel({
  slides,
  autoPlayInterval = 6000,
  className,
  overlayOpacity = 'bg-black/0.1',
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Navigation Logic
  const prevSlide = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault();
      e?.stopPropagation();
      setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    },
    [slides.length],
  );

  const nextSlide = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault();
      e?.stopPropagation();
      setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    },
    [slides.length],
  );

  const goToSlide = (index: number, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => nextSlide(), autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, autoPlayInterval]);

  if (!slides.length) return null;

  return (
    <section
      className={clsx(
        'relative w-full flex items-center justify-center overflow-hidden group',
        'border-b-4 border-b-muted-foreground',
        className || 'h-screen',
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ------------------------------------------------------- */}
      {/* 📱 MOBILE TAP ZONES (Invisible)                         */}
      {/* ------------------------------------------------------- */}

      {/* Left Tap Zone (15% width) */}
      <div
        onClick={prevSlide}
        // 👇 CHANGED: 'top-24' pushes it down ~96px to clear the menu
        // 'bottom-0' ensures it fills the rest of the height
        className='absolute top-24 left-0 bottom-0 w-[15%] z-40 md:hidden'
        aria-label='Previous Slide'
      />

      {/* Right Tap Zone (15% width) */}
      <div
        onClick={nextSlide}
        // 👇 CHANGED: 'top-24' pushes it down ~96px to clear the menu
        className='absolute top-24 right-0 bottom-0 w-[15%] z-40 md:hidden'
        aria-label='Next Slide'
      />

      {/* ------------------------------------------------------- */}
      {/* SLIDES                                                  */}
      {/* ------------------------------------------------------- */}
      {slides.map((slide, index) => (
        <Link
          key={slide.id}
          href={slide.href}
          className={clsx(
            'absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out',
            index === currentIndex
              ? 'opacity-100 z-0'
              : 'opacity-0 -z-10 pointer-events-none',
          )}
        >
          <Image
            src={slide.imageSrc}
            alt={slide.imageAlt || 'Hero Background'}
            fill
            priority={index === 0}
            className='object-cover'
          />
          <div className={clsx('absolute inset-0', overlayOpacity)} />
        </Link>
      ))}

      {/* Gradient Overlay */}
      <div
        className='
          absolute inset-0 
          pointer-events-none z-10
          bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.6),transparent_80%)]
        '
      />

      {/* Content */}
      <div className='relative z-20 container mx-auto px-4 text-center pointer-events-none'>
        <div key={currentIndex}>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in'>
            {slides[currentIndex].title}
            {slides[currentIndex].subtitle && (
              <>
                <br />
                <span className='text-primary-light'>
                  {slides[currentIndex].subtitle}
                </span>
              </>
            )}
          </h1>
          {slides[currentIndex].description && (
            <p
              className='text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-slide-in'
              style={{ animationDelay: '0.1s' }}
            >
              {slides[currentIndex].description}
            </p>
          )}
        </div>
      </div>

      {/* ------------------------------------------------------- */}
      {/* DESKTOP CONTROLS (Visible Icons)                        */}
      {/* ------------------------------------------------------- */}

      {/* Left Arrow - Hidden on Mobile (md:block) */}
      <button
        onClick={prevSlide}
        className={clsx(
          'absolute left-4 z-30 p-2 rounded-full bg-black/20 text-white/70 hover:bg-black/40 hover:text-white transition-all focus:opacity-100',
          'hidden md:block opacity-0 group-hover:opacity-100',
        )}
        aria-label='Previous Slide'
      >
        <ChevronLeft size={48} />
      </button>

      {/* Right Arrow - Hidden on Mobile (md:block) */}
      <button
        onClick={nextSlide}
        className={clsx(
          'absolute right-4 z-30 p-2 rounded-full bg-black/20 text-white/70 hover:bg-black/40 hover:text-white transition-all focus:opacity-100',
          'hidden md:block opacity-0 group-hover:opacity-100',
        )}
        aria-label='Next Slide'
      >
        <ChevronRight size={48} />
      </button>

      {/* Indicators (Dots) */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={e => goToSlide(index, e)}
            className={clsx(
              'w-3 h-3 rounded-full transition-all duration-300',
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/80',
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
