import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageWithTextPageProps = {
  title: string;
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
  className?: string;
  reverseOrder?: boolean;
};

/**
 * A responsive page layout component that displays an image and text content
 * side-by-side on desktop and stacked on mobile.
 */
export default function ImageWithTextPage({
  title,
  imageUrl,
  imageAlt,
  children,
  className,
  reverseOrder = false,
}: ImageWithTextPageProps) {
  return (
    <main
      className={cn(
        "container mx-auto max-w-6xl px-4 py-8 md:py-16",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div
          className={cn(
            "relative w-full aspect-4/3 rounded-lg overflow-hidden shadow-lg",
            reverseOrder && "md:order-last"
          )}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            {title}
          </h1>
          <div className="space-y-4 text-lg text-foreground/90">{children}</div>
        </div>
      </div>
    </main>
  );
}
