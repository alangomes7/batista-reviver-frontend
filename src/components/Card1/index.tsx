import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface CardItem {
  id: number;
  imageSrc: string;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  description: string | ReactNode;
  href: string;
}

interface Card1Props {
  item: CardItem;
  className?: string;
}

export const Card1 = ({ item, className }: Card1Props) => {
  return (
    <div
      className={clsx(
        'shrink-0 snap-center',
        'w-[85vw] sm:w-96',
        'overflow-hidden rounded-xl',
        'bg-card text-card-foreground',
        'border border-border shadow-sm transition-all hover:shadow-lg',
        'flex flex-col',
        'h-full',
        className,
      )}
    >
      {/* IMAGE */}
      <div className='relative w-full aspect-video overflow-hidden bg-muted'>
        <img
          src={item.imageSrc}
          alt={typeof item.title === 'string' ? item.title : 'Card Image'}
          className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors' />
      </div>

      {/* CONTENT */}
      <div className='flex flex-1 flex-col p-5 gap-3'>
        {item.subtitle && (
          <div className='text-xs font-bold uppercase tracking-wider text-primary'>
            {item.subtitle}
          </div>
        )}

        <h3 className='text-lg font-bold leading-tight line-clamp-2 group-hover:text-primary transition-colors'>
          {item.title}
        </h3>

        <div className='text-sm text-muted-foreground line-clamp-2'>
          {item.description}
        </div>

        {/* LINK INDICATION */}
        {item.href && (
          <div className='mt-auto pt-2'>
            <span className='text-sm font-medium text-primary hover:underline inline-flex items-center gap-1'>
              <Link href={item.href}>Acesse →</Link>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
