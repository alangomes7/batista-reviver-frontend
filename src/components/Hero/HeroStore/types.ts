export interface ImageItem {
  id: string | number;
  src: string;
  alt?: string;
}

export interface HeroStoreProps {
  imgBackground: ImageItem[];
  imgLogo: string;
  title: string;
  subtitle: string;
  storeName: string;
  buttonLink: string;
  buttonText: string;
}
