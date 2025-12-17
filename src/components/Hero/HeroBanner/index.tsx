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
  overlayOpacity = 'bg-black/40', // Increased default opacity slightly for better contrast
}: HeroBannerProps) {
  return (
    <section
      className={clsx(
        'relative w-full flex items-center justify-center overflow-hidden',
        // Uses the semantic primary brand color for the border
        'border-b-4 border-primary',
        'bg-background', // Ensures a base background color matches the theme
        className || 'h-[85vh] min-h-150',
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

      {/* ⭐ Black Radial Gradient Highlight ⭐ */}
      {/* Keeps focus on the center text while darkening edges */}
      <div
        className='
          absolute inset-0 
          pointer-events-none 
          bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4),rgba(0,0,0,0.8))]
        '
      />

      {/* Content Container */}
      <div className='relative z-10 container mx-auto px-4 text-center'>
        <h1
          className='
            text-4xl md:text-6xl lg:text-7xl font-bold 
            text-primary-foreground 
            mb-6 animate-fade-in
          '
        >
          {title}
          {subtitle && (
            <>
              <br />
              {/* Uses the mapped light variant of the brand color */}
              <span className='text-primary-light'>{subtitle}</span>
            </>
          )}
        </h1>

        {description && (
          <div
            className='
              text-lg md:text-xl 
              text-primary-foreground/90 
              max-w-2xl mx-auto 
              animate-slide-in
            '
            style={{ animationDelay: '0.1s' }}
          >
            {typeof description === 'string' ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
        )}
      </div>
    </section>
  );
}
