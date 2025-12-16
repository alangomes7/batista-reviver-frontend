import { ArrowRight } from 'lucide-react';
import { CardItem } from '../types';

/**
 * Card Component
 * Glassmorphism style card
 */
export const HeroCard = ({ item }: { item: CardItem }) => {
  return (
    <div className='group relative h-100 w-full min-w-75 md:min-w-87.5 overflow-hidden rounded-2xl bg-gray-900/40 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10'>
      {/* Image Background */}
      <div className='absolute inset-0 h-1/2 w-full overflow-hidden'>
        <img
          src={item.imageSrc}
          alt={typeof item.title === 'string' ? item.title : 'Card Image'}
          className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent' />
      </div>

      {/* Content */}
      <div className='absolute inset-0 flex flex-col justify-end p-6'>
        {item.subtitle && (
          <span className='mb-2 text-xs font-semibold uppercase tracking-wider text-blue-400'>
            {item.subtitle}
          </span>
        )}
        <h3 className='mb-2 text-2xl font-bold text-white group-hover:text-blue-200 transition-colors'>
          {item.title}
        </h3>
        <p className='mb-6 line-clamp-3 text-sm text-gray-300'>
          {item.description}
        </p>

        <a
          href={item.href}
          className='inline-flex items-center text-sm font-medium text-white transition-colors hover:text-blue-400'
        >
          Explore More{' '}
          <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
        </a>
      </div>
    </div>
  );
};
