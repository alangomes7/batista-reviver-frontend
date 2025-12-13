export interface HeroSlide {
  id: string;
  imageSrc: string;
  imageAlt?: string;
  title: string;
  subtitle?: string;
  description?: string;
  href: string;
}

export interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
  className?: string;
  overlayOpacity?: string;
}
