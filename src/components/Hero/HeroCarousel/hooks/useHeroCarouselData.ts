'use client';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { HeroSlide } from '../data/types';
import { TRANSITION_DURATION } from '../data/constants';

export const useHeroCarouselData = (slides: HeroSlide[]) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const extendedSlides = useMemo(() => {
    if (slides.length < 2) return slides;
    return [
      { ...slides[slides.length - 1], id: 'clone-last' },
      ...slides,
      { ...slides[0], id: 'clone-first' },
    ];
  }, [slides]);

  const handleTransitionEnd = useCallback(() => {
    setIsAnimating(false);

    if (currentIndex === extendedSlides.length - 1) {
      setIsTransitionEnabled(false);
      setCurrentIndex(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitionEnabled(true));
      });
    }

    if (currentIndex === 0) {
      setIsTransitionEnabled(false);
      setCurrentIndex(extendedSlides.length - 2);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransitionEnabled(true));
      });
    }
  }, [currentIndex, extendedSlides.length]);

  useEffect(() => {
    if (isAnimating) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(handleTransitionEnd, TRANSITION_DURATION);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isAnimating, handleTransitionEnd]);

  const moveNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitionEnabled(true);
    setCurrentIndex(prev => prev + 1);
  }, [isAnimating]);

  const movePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitionEnabled(true);
    setCurrentIndex(prev => prev - 1);
  }, [isAnimating]);

  const moveTo = useCallback(
    (realIndex: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setIsTransitionEnabled(true);
      setCurrentIndex(realIndex + 1);
    },
    [isAnimating],
  );

  const activeDotIndex = useMemo(() => {
    if (currentIndex === 0) return slides.length - 1;
    if (currentIndex === extendedSlides.length - 1) return 0;
    return currentIndex - 1;
  }, [currentIndex, slides.length, extendedSlides.length]);

  return {
    extendedSlides,
    currentIndex,
    isTransitionEnabled,
    isAnimating,
    activeDotIndex,
    actions: {
      moveNext,
      movePrev,
      moveTo,
    },
  };
};

export type HeroCarouselData = ReturnType<typeof useHeroCarouselData>;
