'use client';

import clsx from 'clsx';
import { HeroCarouselProps } from './data/types';
import {
  DEFAULT_AUTOPLAY_INTERVAL,
  DEFAULT_OVERLAY_OPACITY,
} from './data/constants';
import { useHeroCarousel } from './hooks/useHeroCarousel';
import { HeroSlideItem } from './components/HeroSlideItem';
import { CarouselControls } from './components/CarouselControls';
import { CarouselDots } from './components/CarouselDots';

export default function HeroCarousel({
  slides,
  autoPlayInterval = DEFAULT_AUTOPLAY_INTERVAL,
  className,
  overlayOpacity = DEFAULT_OVERLAY_OPACITY,
}: HeroCarouselProps) {
  const {
    extendedSlides,
    currentIndex,
    isTransitionEnabled,
    activeDotIndex,
    handlers,
  } = useHeroCarousel(slides, autoPlayInterval);

  if (!slides.length) return null;

  return (
    <section
      className={clsx(
        'relative h-full w-full overflow-hidden group select-none',
        'border-b-4 border-b-muted-foreground',
        className || 'h-screen',
      )}
      onMouseEnter={() => handlers.setIsPaused(true)}
      onMouseLeave={() => handlers.setIsPaused(false)}
    >
      <CarouselControls
        onPrev={handlers.prevSlide}
        onNext={handlers.nextSlide}
      />

      {/* TRACK */}
      <div
        className={clsx(
          'flex h-full ease-in-out will-change-transform',
          isTransitionEnabled
            ? 'transition-transform duration-700'
            : 'transition-none duration-0',
        )}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedSlides.map((slide, index) => (
          <HeroSlideItem
            key={`${slide.id}-${index}`}
            slide={slide}
            index={index}
            currentIndex={currentIndex}
            overlayOpacity={overlayOpacity}
          />
        ))}
      </div>

      <CarouselDots
        slides={slides}
        activeIndex={activeDotIndex}
        onDotClick={handlers.goToSlide}
      />
    </section>
  );
}
