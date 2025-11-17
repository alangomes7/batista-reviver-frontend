import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { SlideItem } from "../types";
import Link from "next/link";

/**
 * Mobile version of an image slide
 * Uses 4:3 aspect ratio
 */
export function ImageSlideMobile({ src, alt, href }: SlideItem) {
  return (
    <Card className="border-none p-0 gap-0">
      <CardContent className="p-0 aspect-4/3 overflow-hidden">
        <div className="relative w-full h-full">
          <Link href={href}>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
            />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Desktop version of an image slide
 * Uses cinematic 21:9 (approx 2.35:1) aspect ratio
 */
export function ImageSlideDesktop({ src, alt, href }: SlideItem) {
  return (
    <Card className="border-none p-0 gap-0">
      <CardContent className="p-0 aspect-[2.35/1] overflow-hidden">
        <div className="relative w-full h-full">
          <Link href={href}>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-center"
            />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
