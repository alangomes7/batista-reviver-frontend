'use client';

import clsx from 'clsx';
import { ReactNode, useRef, useEffect } from 'react';
import { Card1, CardItem } from '../Card1';

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

interface InfiniteCardListProps {
  slides: CardItem[];
  className?: string;
  cardClassName?: string;
  title?: string | ReactNode;
}

export default function InfiniteCardList({
  slides,
  className,
  cardClassName,
  title,
}: InfiniteCardListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // === INFINITE LOOP SETUP ===
  const extendedSlides = [...slides, ...slides, ...slides];
  const cardWidth = 400;
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

  // === NEW: Click to Center Logic ===
  const handleCardClick = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    // Get the specific child element corresponding to the card.
    // Note: We add +1 to index because the first child is the <style> tag.
    const cardElement = el.children[index + 1] as HTMLElement;

    if (cardElement) {
      // Calculate position: (Card Offset) - (Half Container) + (Half Card)
      const containerCenter = el.clientWidth / 2;
      const cardCenter = cardElement.offsetWidth / 2;
      const scrollPosition =
        cardElement.offsetLeft - containerCenter + cardCenter;

      el.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      className={clsx(
        'w-full py-6 md:py-10',
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
            className='group/list flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-3 -mx-4 px-4 relative z-0'
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              maskImage: `
                linear-gradient(
                  to right,
                  var(--mask-transparent) 0,
                  var(--mask-solid) var(--mask-edge-size-sm),
                  var(--mask-solid) calc(100% - var(--mask-edge-size-sm)),
                  var(--mask-transparent) 100%
                )
              `,
              WebkitMaskImage: `
                linear-gradient(
                  to right,
                  var(--mask-transparent) 0,
                  var(--mask-solid) var(--mask-edge-size-sm),
                  var(--mask-solid) calc(100% - var(--mask-edge-size-sm)),
                  var(--mask-transparent) 100%
                )
              `,
            }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>

            {extendedSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${index}`}
                onClick={() => handleCardClick(index)}
                className={clsx(
                  'cursor-pointer',
                  'transition-all duration-500 ease-out',
                  'group-hover/list:opacity-40',
                  'hover:opacity-100!',
                  'hover:scale-105',
                )}
              >
                <Card1 item={slide} className={cardClassName} />
              </div>
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
