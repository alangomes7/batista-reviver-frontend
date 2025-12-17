import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface HeroImageProps {
  // Section Header (Top Center)
  heroTitle: string | ReactNode;
  heroSubtitle?: string | ReactNode;

  // Content Block (Side by Side)
  title?: string | ReactNode;
  description?: string | ReactNode;

  // Image
  imageSrc: string;
  imageAlt?: string;

  // Actions (Optional)
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;

  // Layout
  reverse?: boolean;
  className?: string;
}

export default function HeroImage({
  heroTitle,
  heroSubtitle,
  title,
  description,
  imageSrc,
  imageAlt = 'Hero Image',
  ctaLabel,
  ctaHref,
  onCtaClick,
  reverse = false,
  className,
}: HeroImageProps) {
  return (
    <section
      className={clsx(
        'h-full w-full py-16 md:py-24',
        'bg-background text-foreground',
        'border-b border-border',
        className,
      )}
    >
      <div className='container mx-auto px-4'>
        {/* 1. Global Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-primary mb-4 animate-fade-in'>
            {heroTitle}
          </h2>
          {heroSubtitle && (
            <div
              className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in'
              style={{ animationDelay: '0.1s' }}
            >
              {heroSubtitle}
            </div>
          )}
        </div>

        {/* 2. Content Grid */}
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Image Column */}
          <div
            className={clsx(
              'w-full animate-fade-in',
              reverse ? 'md:order-2' : 'md:order-1',
            )}
            style={{ animationDelay: '0.2s' }}
          >
            <div className='relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-border'>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 50vw'
              />
            </div>
          </div>

          {/* Text/Content Column */}
          <div
            className={clsx(
              'animate-slide-in',
              reverse ? 'md:order-1' : 'md:order-2',
            )}
            style={{ animationDelay: '0.3s' }}
          >
            {/* Inner Content Title */}
            {title && (
              <div className='mb-4'>
                {typeof title === 'string' ? (
                  <h3 className='text-2xl md:text-3xl font-semibold text-primary'>
                    {title}
                  </h3>
                ) : (
                  title
                )}
              </div>
            )}

            {/* Description */}
            {description && (
              <div className='prose prose-lg text-foreground'>
                {typeof description === 'string' ? (
                  <p className='text-lg md:text-xl leading-relaxed text-justify md:text-left'>
                    {description}
                  </p>
                ) : (
                  description
                )}
              </div>
            )}

            {/* Optional Button */}
            {ctaLabel && (
              <div className='mt-8 flex justify-center md:justify-start'>
                {ctaHref ? (
                  <Link href={ctaHref} className='btn btn-primary'>
                    {ctaLabel}
                  </Link>
                ) : (
                  <button
                    onClick={onCtaClick}
                    className='btn btn-primary'
                    type='button'
                  >
                    {ctaLabel}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
