"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { ImageSlideMobile, ImageSlideDesktop } from "./carouselSlides";
import { slideImagesHomeDesktop, slideImagesHomeMobile } from "../types";

export function CarouselHomePage() {
  const maxSlides = Math.max(
    slideImagesHomeDesktop.length,
    slideImagesHomeMobile.length
  );

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-screen"
    >
      <CarouselContent className="gap-0">
        {Array.from({ length: maxSlides }).map((_, index) => {
          const desktopSlide = slideImagesHomeDesktop[index];
          const mobileSlide = slideImagesHomeMobile[index];

          return (
            <CarouselItem key={index} className="p-0 m-0">
              {mobileSlide && (
                <div className="block md:hidden">
                  <ImageSlideMobile
                    src={mobileSlide.src}
                    alt={mobileSlide.alt}
                    href={mobileSlide.href}
                  />
                </div>
              )}

              {/* Desktop slide */}
              {desktopSlide && (
                <div className="hidden md:block">
                  <ImageSlideDesktop
                    src={desktopSlide.src}
                    alt={desktopSlide.alt}
                    href={desktopSlide.href}
                  />
                </div>
              )}
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
