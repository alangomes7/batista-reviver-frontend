import clsx from 'clsx';
import { HeroSlide } from '../data/types';

interface CarouselDotsProps {
  slides: HeroSlide[];
  activeIndex: number;
  onDotClick: (index: number, e?: React.MouseEvent) => void;
}

export const CarouselDots = ({
  slides,
  activeIndex,
  onDotClick,
}: CarouselDotsProps) => {
  return (
    <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3'>
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={e => onDotClick(index, e)}
          className={clsx(
            'w-3 h-3 rounded-full transition-all duration-300',
            index === activeIndex
              ? 'bg-white w-8'
              : 'bg-white/50 hover:bg-white/80',
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
