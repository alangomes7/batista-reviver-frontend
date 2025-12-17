'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { Card2 } from '@/components/Card2';
import { CardItem } from '../Card1';

interface CardListProps {
  cards: CardItem[];
}

export function CardList({ cards }: CardListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    // Boundary checks
    if (container.scrollLeft < 20) {
      setActiveIndex(0);
      return;
    }

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll - 20) {
      setActiveIndex(cards.length - 1);
      return;
    }

    // Find closest card to center
    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const card = child as HTMLElement;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current || index < 0 || index >= cards.length)
      return;

    const container = scrollContainerRef.current;
    const card = container.children[index] as HTMLElement;

    if (card) {
      const idealScrollLeft =
        card.offsetLeft - container.clientWidth / 2 + card.offsetWidth / 2;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const clampedScrollLeft = Math.max(
        0,
        Math.min(idealScrollLeft, maxScroll),
      );

      container.scrollTo({
        left: clampedScrollLeft,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className='relative w-full max-w-full mx-auto mt-8'>
      {/* Navigation Buttons */}
      <div className='absolute right-8 md:right-12 flex gap-2 z-20'>
        <button
          onClick={() => scrollToCard(activeIndex - 1)}
          disabled={activeIndex === 0}
          className={clsx(
            'p-3 rounded-full transition-colors active:scale-95 border',
            'bg-(--card-background) border-(--border) text-(--foreground)',
            'hover:border-(--brand-main) hover:text-(--brand-main)',
            'disabled:opacity-50 disabled:cursor-not-allowed',
          )}
          aria-label='Previous card'
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scrollToCard(activeIndex + 1)}
          disabled={activeIndex === cards.length - 1}
          className={clsx(
            'p-3 rounded-full transition-colors active:scale-95 border',
            'bg-(--card-background) border-(--border) text-(--foreground)',
            'hover:border-(--brand-main) hover:text-(--brand-main)',
            'disabled:opacity-50 disabled:cursor-not-allowed',
          )}
          aria-label='Next card'
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className={clsx(
          'flex gap-6 overflow-x-auto pb-8 pt-15',
          'snap-x snap-mandatory',
          'scrollbar-hide',
          'px-5 md:px-12',
        )}
      >
        {cards.map((card, index) => {
          return (
            <div
              key={card.id}
              data-active={activeIndex === index}
              className={clsx(
                // Card Dimensions
                'shrink-0 w-[85vw] md:w-92.5',
                'snap-center transition-all duration-300 ease-in-out',
                // Hover & Active State Logic
                'opacity-50 scale-90 hover:opacity-100 hover:scale-100',
                'data-[active=true]:opacity-100 data-[active=true]:scale-100',
                'data-[active=true]:z-10',
              )}
              onClick={() => scrollToCard(index)}
            >
              <Card2 item={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
