import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

export interface Card2Props {
  id: number;
  imageSrc: string;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  description: string | ReactNode;
  href: string;
}

/**
 * Card Component
 * Glassmorphism style card
 */
export const Card2 = ({ item }: { item: Card2Props }) => {
  return (
    <div
      className='group relative h-100 w-full min-w-75 md:min-w-87.5 overflow-hidden rounded-2xl 
      bg-(--card-background)/60 border-2 border-(--border) backdrop-blur-md mb-6
      transition-all duration-500 hover:-translate-y-2 hover:border-(--brand-main)/50 hover:shadow-2xl hover:shadow-(--brand-main)/10'
    >
      {/* Image Background */}
      <div className='absolute inset-0 h-1/2 w-full overflow-hidden'>
        <img
          src={item.imageSrc}
          alt={typeof item.title === 'string' ? item.title : 'Card Image'}
          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-linear-to-t from-(--card-background) via-transparent to-transparent' />
      </div>

      {/* Content */}
      <div className='absolute inset-0 flex flex-col justify-end p-6'>
        {item.subtitle && (
          <span className='mb-2 text-xs font-semibold uppercase tracking-wider text-(--brand-main)'>
            {item.subtitle}
          </span>
        )}
        <h3 className='mb-2 text-2xl font-bold text-(--card-foreground) transition-colors group-hover:text-(--brand-main)'>
          {item.title}
        </h3>
        <p className='mb-6 line-clamp-3 text-sm text-(--muted-foreground)'>
          {item.description}
        </p>

        <a
          href={item.href}
          className='inline-flex items-center text-sm font-medium text-(--card-foreground) transition-colors hover:text-(--brand-main)'
        >
          Saiba Mais{' '}
          <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
        </a>
      </div>
    </div>
  );
};
