'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { HeroCard } from '../HeroCard';
import { AnimatedTitle } from '@/components/Animations/AnimatedTitle';
import { CardItem } from '../types';

interface HeroCardListProps {
  title: string;
  subtitle?: string;
  cards: CardItem[];
}

/**
 * Carousel Logic & Main Assembly
 */
export default function HeroCardList({
  title,
  subtitle,
  cards,
}: HeroCardListProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 370;
      const newScrollLeft =
        direction === 'left'
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className='relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-[#0a0a0a] py-20'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-250 h-125 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none' />
      <div className='absolute bottom-0 right-0 w-200 h-150 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none' />
      <AnimatedTitle text={title} subtitle={subtitle} />
      <div className='relative w-full max-w-350 mx-auto px-4 md:px-8 mt-8'>
        <div className='absolute -top-16 right-8 md:right-12 flex gap-2 z-20'>
          <button
            onClick={() => scroll('left')}
            className='p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors active:scale-95'
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className='p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors active:scale-95'
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div
          ref={scrollContainerRef}
          className={clsx(
            'flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory',
            'scrollbar-hide',
            'mask-linear-fade',
          )}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cards.map(card => (
            <div key={card.id} className='snap-center shrink-0'>
              <HeroCard item={card} />
            </div>
          ))}
          <div className='w-4 shrink-0' />
        </div>
      </div>
    </section>
  );
}
