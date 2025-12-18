'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

// Define the structure of the image object
export interface ImageItem {
  id: string | number;
  src: string;
  alt?: string;
}

interface ImageCarouselProps {
  images: ImageItem[]; // Expecting an array of objects with IDs
  interval?: number;
  className?: string;
  overlayClassName?: string;
}

export default function ImageCarousel({
  images,
  interval = 4000,
  className,
  overlayClassName,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={clsx('relative w-full h-full overflow-hidden', className)}>
      {images.map((item, index) => (
        <div
          key={item.id}
          className={clsx(
            'absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out',
            index === currentIndex ? 'opacity-100' : 'opacity-0',
          )}
        >
          <Image
            src={item.src}
            alt={item.alt || `Slide ${index + 1}`}
            fill
            className='object-cover'
            priority={index === 0}
            sizes='100vw'
          />
          {overlayClassName && (
            <div className={clsx('absolute inset-0', overlayClassName)} />
          )}
        </div>
      ))}
    </div>
  );
}
