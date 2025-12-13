import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

interface CarouselControlsProps {
  onPrev: (e?: React.MouseEvent) => void;
  onNext: (e?: React.MouseEvent) => void;
}

export const CarouselControls = ({ onPrev, onNext }: CarouselControlsProps) => {
  const btnClass = clsx(
    'absolute top-1/2 -translate-y-1/2 z-30 p-2 rounded-full',
    'bg-black/20 text-white/70 hover:bg-black/40 hover:text-white',
    'transition-all focus:opacity-100 hidden md:block',
    'opacity-0 group-hover:opacity-100',
  );

  return (
    <>
      {/* Mobile Tap Zones */}
      <div
        onClick={onPrev}
        className='absolute top-24 left-0 bottom-0 w-[15%] z-40 md:hidden cursor-pointer'
        aria-label='Previous Slide'
      />
      <div
        onClick={onNext}
        className='absolute top-24 right-0 bottom-0 w-[15%] z-40 md:hidden cursor-pointer'
        aria-label='Next Slide'
      />

      {/* Desktop Buttons */}
      <button
        onClick={onPrev}
        className={clsx(btnClass, 'left-4')}
        aria-label='Previous'
      >
        <ChevronLeft size={48} />
      </button>

      <button
        onClick={onNext}
        className={clsx(btnClass, 'right-4')}
        aria-label='Next'
      >
        <ChevronRight size={48} />
      </button>
    </>
  );
};
