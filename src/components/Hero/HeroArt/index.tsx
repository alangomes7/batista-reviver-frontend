import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface HeroArtProps {
  subtitle1?: string;
  subtitle2?: string;
  title: string;
  description: string;
  backgroundImageMobile: string;
  backgroundImageDesktop: string;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function HeroArt({
  subtitle1,
  subtitle2,
  title,
  description,
  backgroundImageDesktop,
  backgroundImageMobile,
  ctaLabel,
  ctaHref,
  className,
}: HeroArtProps) {
  // Logic to determine if sections should render
  const showTopBar = subtitle1 || subtitle2;

  // Ensure we only show button if a link is actually provided
  const showButton = Boolean(ctaHref);

  return (
    <section
      className={clsx(
        'relative h-screen w-full overflow-hidden flex flex-col',
        'text-white',
        className,
      )}
    >
      {/* ================= BACKGROUND LAYER ================= */}
      <div className='absolute inset-0 -z-10 bg-black'>
        {/* Desktop background */}
        <Image
          src={backgroundImageDesktop}
          alt='Hero Background Desktop'
          fill
          className={clsx(
            'object-cover',
            backgroundImageMobile ? 'hidden md:block' : 'block',
          )}
          priority
          sizes='100vw'
        />

        {/* Mobile background */}
        <Image
          src={backgroundImageMobile}
          alt='Hero Background Mobile'
          fill
          className='block md:hidden object-cover'
          priority
          sizes='100vw'
        />

        {/* Overlay */}
        <div className='absolute inset-0 bg-black/40' />
      </div>

      {/* ================= CONTENT LAYER ================= */}

      {/* 1. TOP SECTION: Subtitles & Line */}
      {showTopBar && (
        <div className='w-full pt-8 px-6 md:px-10 animate-fade-in shrink-0 z-10'>
          <div className='w-full flex justify-between items-center border-b border-white/50 pb-4'>
            {subtitle1 ? (
              <span className='text-lg md:text-xl font-medium tracking-wide'>
                {subtitle1}
              </span>
            ) : (
              <span />
            )}

            {subtitle2 && (
              <span className='text-lg md:text-xl font-medium tracking-wide'>
                {subtitle2}
              </span>
            )}
          </div>
        </div>
      )}

      {/* 2. MIDDLE SECTION: Main Content */}
      <div className='flex-1 flex flex-col justify-center w-full px-6 md:px-10 z-10'>
        <div
          className='max-w-4xl animate-slide-in'
          style={{ animationDelay: '0.2s' }}
        >
          {/* Title */}
          <h1 className='text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight'>
            {title}
          </h1>

          {/* Description */}
          <p className='max-w-2xl text-xl md:text-2xl text-white/90 leading-relaxed mb-12'>
            {description}
          </p>

          {/* CTA Button */}
          {showButton && ctaHref && (
            <Link
              href={ctaHref}
              className='inline-flex items-center gap-4 border-2 border-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-colors'
            >
              {ctaLabel || 'Learn More'}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
