'use client';

import { CardItem } from '@/components/Hero/types';

export const heroCardEstudy: CardItem[] = [
  {
    id: 1,
    imageSrc: '/images/card-1.png',
    title: 'Card Title One',
    subtitle: 'Optional subtitle',
    description: 'This is a simple description for the first card.',
    href: '/card-one',
  },
  {
    id: 2,
    imageSrc: '/images/card-2.png',
    title: <strong>Card Title Two</strong>,
    description: (
      <span>
        This card uses a <em>ReactNode</em> as its description.
      </span>
    ),
    href: '/card-two',
  },
  {
    id: 3,
    imageSrc: '/images/card-3.png',
    title: 'Card Title Three',
    subtitle: <span style={{ color: 'gray' }}>Subtitle as ReactNode</span>,
    description: 'Another plain text description for testing.',
    href: 'https://example.com',
  },
  {
    id: 4,
    imageSrc: '/images/card-1.png',
    title: 'Card Title One',
    subtitle: 'Optional subtitle',
    description: 'This is a simple description for the first card.',
    href: '/card-one',
  },
  {
    id: 5,
    imageSrc: '/images/card-2.png',
    title: <strong>Card Title Two</strong>,
    description: (
      <span>
        This card uses a <em>ReactNode</em> as its description.
      </span>
    ),
    href: '/card-two',
  },
  {
    id: 6,
    imageSrc: '/images/card-3.png',
    title: 'Card Title Three',
    subtitle: <span style={{ color: 'gray' }}>Subtitle as ReactNode</span>,
    description: 'Another plain text description for testing.',
    href: 'https://example.com',
  },
];
