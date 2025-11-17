import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageBannerWithTextPageProps = {
  title: string;
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * A responsive page layout component that displays an image as a banner
 * on top, with text content below.
 */
export default function ImageBannerWithTextPage({
  title,
  imageUrl,
  imageAlt,
  children,
  className,
}: ImageBannerWithTextPageProps) {
  return (
    <main
      className={cn(
        "container mx-auto max-w-6xl px-4 py-8 md:py-16",
        className
      )}
    >
      {/* Banner Image */}
      <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-8">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">{title}</h1>
        <div className="space-y-4 text-lg text-foreground/90">{children}</div>
      </div>
    </main>
  );
}
