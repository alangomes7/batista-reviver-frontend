import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface SimpleHeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href: string;
  ctaLabel?: string;
  className?: string;
  backgroundImage?: string;
}

export default function SimpleHero({
  title,
  description,
  imageSrc,
  imageAlt = 'Hero Image',
  href,
  ctaLabel = 'Saiba Mais',
  className,
  backgroundImage,
}: SimpleHeroProps) {
  return (
    <section
      className={clsx(
        'relative h-full w-full py-12 md:py-24 overflow-hidden',
        'border-b border-(--border)',
        !backgroundImage
          ? 'bg-(--background) text-(--brand-secondary-dark)'
          : 'text-white',
        className,
      )}
    >
      {/* Background Image Layer */}
      {backgroundImage && (
        <div className='absolute inset-0 -z-10'>
          {/* Background Image */}
          <Image
            src={backgroundImage}
            alt='Background Texture'
            fill
            className='object-cover'
            priority
            sizes='100vw'
          />

          {/* Overlay */}
          <div className='absolute inset-0 bg-(--brand-secondary-dark)/20' />
        </div>
      )}

      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-6xl'>
          {/* Title */}
          <h1
            className={clsx(
              'mb-12 text-center text-3xl md:text-5xl font-bold tracking-tight animate-fade-in',
              // Use Theme Primary if no background image
              backgroundImage ? 'text-white' : 'text-(--primary)',
            )}
          >
            {title}
          </h1>

          {/* Content Grid */}
          <div className='grid items-center gap-12 md:grid-cols-2'>
            {/* 1. Left: Description + CTA */}
            <div
              className='text-center md:text-left animate-slide-in'
              style={{ animationDelay: '0.1s' }}
            >
              <p
                className={clsx(
                  'mb-8 text-lg md:text-xl leading-relaxed',
                  backgroundImage
                    ? 'text-background'
                    : 'text-(--muted-foreground)',
                )}
              >
                {description}
              </p>

              <Link href={href} className='btn btn-primary text-lg px-8 py-3'>
                {ctaLabel}
              </Link>
            </div>

            {/* 2. Right: Image Frame */}
            <div
              className='
                w-full flex justify-center md:justify-center
                animate-fade-in
              '
              style={{ animationDelay: '0.2s' }}
            >
              <div
                className='
                  relative w-full mb-10
                  max-w-75 
                  aspect-square
                  overflow-hidden rounded-xl shadow-lg 
                  border border-(--border)
                '
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 384px'
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
