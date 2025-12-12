import clsx from 'clsx';
import Image from 'next/image';
import { ReactNode } from 'react';

interface HeroBannerProps {
  imageSrc: string;
  imageAlt?: string;
  
  title: string;
  subtitle?: string;
  description?: string | ReactNode;
  
  
  className?: string; 
  overlayOpacity?: string;
}

export default function HeroBanner({
  imageSrc,
  imageAlt = 'Hero Background',
  title,
  subtitle,
  description,
  className,
  overlayOpacity = 'bg-black/60',
}: HeroBannerProps) {
  return (
    <section
      className={clsx(
        'relative w-full flex items-center justify-center overflow-hidden',
        'border-b-4 border-b-muted-foreground',
        // Default height if no className is provided, otherwise merge/override
        className || 'h-[85vh] min-h-[600px]'
      )}
    >
      {/* Background Image Wrapper */}
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className='object-cover'
        />

        {/* Dark Overlay */}
        <div className={clsx('absolute inset-0', overlayOpacity)} />
      </div>

      {/* Content Container */}
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in'>
          {title} 
          {subtitle && (
            <>
              <br />
              <span className='text-primary-light'>{subtitle}</span>
            </>
          )}
        </h1>

        {description && (
          <p
            className='text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-slide-in'
            style={{ animationDelay: '0.1s' }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}