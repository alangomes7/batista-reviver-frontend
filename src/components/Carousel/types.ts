/**
 * Defines the shape for a single carousel slide.
 * By convention, type names use PascalCase.
 */
export type SlideItem = {
  src: string;
  alt: string;
  href: string;
};

/**
 * An array of slides for the desktop carousel.
 * We apply the 'Slide[]' type (an array of Slide) to our variable.
 */
export const slideImagesHomeDesktop: SlideItem[] = [
  {
    src: "/homepage/carousel/image01.jpeg",
    alt: "Image 1",
    href: "/",
  },
  {
    src: "/homepage/carousel/image02.jpg",
    alt: "Image 2",
    href: "/",
  },
  { src: "/homepage/carousel/image03.jpg", alt: "Image 3", href: "/" },
];

/**
 * An array of slides for the mobile carousel.
 */
export const slideImagesHomeMobile: SlideItem[] = [
  {
    src: "/homepage/carousel/image01.jpeg",
    alt: "Image 1",
    href: "/",
  },
  {
    src: "/homepage/carousel/image02.jpg",
    alt: "Image 2",
    href: "/",
  },
  { src: "/homepage/carousel/image03.jpg", alt: "Image 3", href: "/" },
];
