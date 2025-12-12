import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface HeroMapProps {
  /** Main heading text or React Node */
  title: string | ReactNode;

  /** Subtitle text or React Node */
  description?: string | ReactNode;

  /**
   * The 'src' URL from a Google Maps embed iframe.
   * Example: "https://www.google.com/maps/embed?..."
   */
  mapEmbedUrl: string;

  /** Optional override for the iframe title for accessibility. Defaults to title prop if string. */
  iframeTitle?: string;

  /** Outer section classes */
  className?: string;

  /** Inner container classes (useful for changing max-width) */
  containerClassName?: string;

  /** Map iframe classes (useful for changing height or aspect ratio) */
  mapClassName?: string;
}

export default function HeroMap({
  title,
  description,
  mapEmbedUrl,
  iframeTitle,
  className,
  containerClassName,
  mapClassName,
}: HeroMapProps) {
  const ariaLabel =
    typeof title === 'string' ? title : iframeTitle || 'Location Map';

  return (
    <section
      className={cn(
        'w-full px-0 py-0 md:py-20',
        'bg-background text-foreground',
        className,
      )}
    >
      <div
        className={cn('container mx-auto w-full space-y-8', containerClassName)}
      >
        {/* Header Section */}
        <div className='space-y-4 text-center animate-fade-in'>
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight text-primary'>
            {title}
          </h1>

          {description && (
            <div className='mx-auto max-w-2xl text-lg text-muted-foreground'>
              {description}
            </div>
          )}
        </div>

        {/* Map Container */}
        <div className='relative w-full overflow-hidden rounded-lg border border-border bg-card-background shadow-lg animate-slide-in'>
          <iframe
            src={mapEmbedUrl}
            className={cn('aspect-video w-full h-100 md:h-125', mapClassName)}
            style={{ border: 0 }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title={`Location map for ${ariaLabel}`}
            aria-label={`Map showing location of ${ariaLabel}`}
          />
        </div>
      </div>
    </section>
  );
}
