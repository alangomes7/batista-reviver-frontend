import { ReactNode } from 'react';

export interface CardItem {
  id: number;
  imageSrc: string;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  description: string | ReactNode;
  href: string;
}
