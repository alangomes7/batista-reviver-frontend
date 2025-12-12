'use client';

import clsx from 'clsx';
import Link from 'next/link';

import { ReactNode, useRef, useEffect } from 'react';

// --- Icons ---

const ArrowLeftIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={2}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15.75 19.5L8.25 12l7.5-7.5'
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={2}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8.25 4.5l7.5 7.5-7.5 7.5'
    />
  </svg>
);

interface CardItem {
  id: number;

  imageSrc: string;

  title: string | ReactNode;

  subtitle?: string | ReactNode;

  description: string | ReactNode;

  href: string;
}

interface VideoCarouselProps {
  slides: CardItem[];

  className?: string;

  cardClassName?: string;

  title?: string | ReactNode;
}

export default function InfiniteVideoCardList({
  slides,

  className,

  cardClassName,

  title,
}: VideoCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // === INFINITE LOOP SETUP ===

  const extendedSlides = [...slides, ...slides, ...slides];

  const cardWidth = 400; // must match scroll amount

  const middleIndex = slides.length;

  // Move scroll to middle set on mount

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = middleIndex * cardWidth;
    }
  }, [middleIndex]);

  // Looping logic

  const handleScroll = () => {
    const el = scrollContainerRef.current;

    if (!el) return;

    const totalWidth = slides.length * cardWidth;

    const current = el.scrollLeft;

    // If too far left → jump forward

    if (current <= cardWidth) {
      el.scrollLeft += totalWidth;
    }

    // If too far right → jump back
    else if (current >= totalWidth * 2) {
      el.scrollLeft -= totalWidth;
    }
  };

  // Scroll via buttons

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;

    if (!el) return;

    const amount = direction === 'left' ? -cardWidth : cardWidth;

    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section
      className={clsx(
        'w-full py-12 md:py-20',

        'bg-background text-foreground',

        className,
      )}
    >
      <div className='container mx-auto px-4'>
        {title && (
          <h2 className='text-3xl font-bold mb-8 text-foreground'>{title}</h2>
        )}

        <div className='relative group/carousel'>
          {/* SCROLL CONTAINER */}

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className='flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 relative z-0'
            style={{
              scrollbarWidth: 'none',

              msOverflowStyle: 'none',

              maskImage:
                'linear-gradient(to right, transparent 0, black 16px, black calc(100% - 16px), transparent 100%)',

              WebkitMaskImage:
                'linear-gradient(to right, transparent 0, black 16px, black calc(100% - 16px), transparent 100%)',
            }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>

            {extendedSlides.map((slide, index) => (
              <Link
                // 1. KEY MUST BE HERE (Outermost element)
                key={`${slide.id}-${index}`}
                href={slide.href}
                // Optional: draggable=false helps carousel UX so user doesn't drag the link ghost
                draggable={false}
                // We add 'group' here so the hover effects inside work based on hovering the Link
                className='group relative block h-full select-none'
              >
                <div
                  className={clsx(
                    'shrink-0 snap-center',
                    'w-[85vw] sm:w-96',
                    'overflow-hidden rounded-xl', // Removed 'group' and 'relative' from here, moved up
                    'bg-card text-card-foreground',
                    'border border-border shadow-sm transition-all hover:shadow-lg',
                    'flex flex-col',
                    'h-full', // Ensure height fills the Link
                    cardClassName,
                  )}
                >
                  {/* IMAGE */}
                  <div className='relative w-full aspect-video overflow-hidden bg-muted'>
                    <img
                      src={slide.imageSrc}
                      alt={String(slide.title)}
                      className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors' />
                  </div>

                  {/* CONTENT */}
                  <div className='flex flex-1 flex-col p-5 gap-3'>
                    {slide.subtitle && (
                      <div className='text-xs font-bold uppercase tracking-wider text-primary'>
                        {slide.subtitle}
                      </div>
                    )}

                    <h3 className='text-lg font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors'>
                      {slide.title}
                    </h3>

                    <div className='text-sm text-muted-foreground line-clamp-2'>
                      {slide.description}
                    </div>

                    {/* 2. NESTED LINK FIX */}
                    {/* We keep the visual "Saiba mais", but use a span. 
            The click is handled by the parent <Link> */}
                    {slide.href && (
                      <div className='mt-auto pt-2'>
                        <span className='text-sm font-medium text-primary hover:underline inline-flex items-center gap-1'>
                          Saiba mais →
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* LEFT BUTTON */}

          <button
            onClick={() => scroll('left')}
            className='absolute left-4 top-1/2 -translate-y-1/2 z-50

                       w-12 h-12 rounded-full

                       bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm

                       flex items-center justify-center

                       opacity-0 transition-all duration-300

                       group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0 translate-x-4

                       focus:outline-none focus:ring-2 focus:ring-primary'
            aria-label='Scroll left'
          >
            <ArrowLeftIcon />
          </button>

          {/* RIGHT BUTTON */}

          <button
            onClick={() => scroll('right')}
            className='absolute right-4 top-1/2 -translate-y-1/2 z-50

                       w-12 h-12 rounded-full

                       bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm

                       flex items-center justify-center

                       opacity-0 transition-all duration-300

                       group-hover/carousel:opacity-100 group-hover/carousel:translate-x-0 -translate-x-4

                       focus:outline-none focus:ring-2 focus:ring-primary'
            aria-label='Scroll right'
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
