import { cn } from "@/lib/utils";

type MapPageLayoutProps = {
  title: string;

  /**
   * The 'src' URL from a Google Maps embed iframe.
   * Example: "https://www.google.com/maps/embed?pb=..."
   */
  mapEmbedUrl: string;
  className?: string;
};

/**
 * A simple page layout that displays a title followed by a
 * responsive, embedded Google Map iframe.
 */
export default function MapPageLayout({
  title,
  mapEmbedUrl,
  className,
}: MapPageLayoutProps) {
  return (
    <main
      className={cn(
        "container mx-auto max-w-6xl px-4 py-8 md:py-16",
        className
      )}
    >
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary text-center">
          {title}
        </h1>
        <div className="w-full overflow-hidden rounded-lg shadow-lg border border-border">
          <iframe
            src={mapEmbedUrl}
            className="w-full aspect-video"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Location map for ${title}`}
          ></iframe>
        </div>
      </div>
    </main>
  );
}
