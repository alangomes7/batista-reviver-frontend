import { cn } from '@/lib/utils';

type HeroMapProps = {
  title: string;
  description?: string;
  /**
   * The 'src' URL from a Google Maps embed iframe.
   * Example: "https://www.google.com/maps/embed?..."
   */
  mapEmbedUrl: string;
  className?: string;
};

export default function HeroMap({
  title,
  description,
  mapEmbedUrl,
  className,
}: HeroMapProps) {
  return (
    <section
      className={cn(
        // Layout & Spacing
        'w-full px-4 py-12 md:py-20',
        // Background color from themes.css via globals.css
        'bg-background text-foreground',
        className,
      )}
    >
      <div className='container mx-auto max-w-6xl space-y-8'>
        {/* Header Section */}
        <div className='space-y-4 text-center animate-fade-in'>
          <h1 className='text-3xl md:text-5xl font-bold tracking-tight text-primary'>
            {title}
          </h1>
          {description && (
            <p className='mx-auto max-w-2xl text-lg text-muted-foreground'>
              {description}
            </p>
          )}
        </div>

        {/* Map Container */}
        <div className='relative w-full overflow-hidden rounded-lg border border-border bg-card-background shadow-lg animate-slide-in'>
          <iframe
            src={mapEmbedUrl}
            className='aspect-video w-full h-[400px] md:h-[500px]'
            style={{ border: 0 }}
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title={`Location map for ${title}`}
            aria-label={`Map showing location of ${title}`}
          />
        </div>
      </div>
    </section>
  );
}
