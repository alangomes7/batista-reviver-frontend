import { useHeroCarouselData } from './useHeroCarouselData';
import { useHeroCarouselHandlers } from './useHeroCarouselHandlers';
import { HeroSlide } from '../data/types';

export const useHeroCarousel = (
  slides: HeroSlide[],
  autoPlayInterval: number,
) => {
  // 1. Initialize the Engine
  const carouselData = useHeroCarouselData(slides);

  // 2. Initialize the Controller
  const { handlers } = useHeroCarouselHandlers(carouselData, autoPlayInterval);

  // 3. Return combined API
  return {
    ...carouselData, // extendedSlides, currentIndex, isTransitionEnabled, activeDotIndex
    handlers, // nextSlide, prevSlide, goToSlide, setIsPaused
  };
};
