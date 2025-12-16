import clsx from 'clsx';
import { ReactNode } from 'react';

interface HeroVideoProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  videoSrc: string;
  videoTitle?: string;
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

export default function HeroVideo({
  title,
  subtitle,
  videoSrc,
  videoTitle = 'Video player',
  children,
  reverse = false,
  className,
}: HeroVideoProps) {
  return (
    <section
      className={clsx(
        'w-full py-16 md:py-24',
        'bg-background text-foreground',
        'border-b border-border',
        className,
      )}
    >
      <div className='container mx-auto px-4'>
        {/* Header Section */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-primary mb-4 animate-fade-in'>
            {title}
          </h2>
          {subtitle && (
            <div
              className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in'
              style={{ animationDelay: '0.1s' }}
            >
              {subtitle}
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className='grid md:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Video Column */}
          <div
            className={clsx(
              'w-full animate-fade-in',
              reverse ? 'md:order-2' : 'md:order-1',
            )}
            style={{ animationDelay: '0.2s' }}
          >
            <div className='relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-border'>
              <iframe
                className='absolute top-0 left-0 w-full h-full'
                src={videoSrc}
                title={videoTitle}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
            </div>
          </div>

          {/* Text/Children Column */}
          <div
            className={clsx(
              'animate-slide-in',
              reverse ? 'md:order-1' : 'md:order-2',
            )}
            style={{ animationDelay: '0.3s' }}
          >
            <div className='prose prose-lg text-foreground'>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
