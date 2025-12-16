import { ReactNode } from 'react';

export interface HeroSlide {
  id: string | number;
  imageSrc: string;
  href: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
}

export interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
  className?: string;
  overlayOpacity?: string;
}
