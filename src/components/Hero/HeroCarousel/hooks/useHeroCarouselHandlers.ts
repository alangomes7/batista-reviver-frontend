'use client';
import { useState, useEffect, useCallback } from 'react';
import { HeroCarouselData } from './useHeroCarouselData';

export const useHeroCarouselHandlers = (
  data: HeroCarouselData,
  autoPlayInterval: number,
) => {
  const [isPaused, setIsPaused] = useState(false);
  const { actions, isAnimating } = data;

  const nextSlide = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault();
      e?.stopPropagation();
      if (isAnimating) return;
      actions.moveNext();
    },
    [isAnimating, actions],
  );

  const prevSlide = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault();
      e?.stopPropagation();
      if (isAnimating) return;
      actions.movePrev();
    },
    [isAnimating, actions],
  );

  const goToSlide = (realIndex: number, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (isAnimating) return;
    actions.moveTo(realIndex);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => actions.moveNext(), autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, autoPlayInterval, actions]);

  return {
    handlers: {
      nextSlide,
      prevSlide,
      goToSlide,
      setIsPaused,
    },
  };
};
