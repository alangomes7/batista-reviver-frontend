import clsx from 'clsx';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section
      className={clsx(
        'relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden',
        'border-b-4 border-b-muted-foreground',
      )}
    >
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src='/images/hero_banner.jpg'
          alt='Hero Background'
          fill
          priority
          className='object-cover'
        />

        <div className='absolute inset-0 bg-black/60' />
      </div>

      <div className='relative z-10 container mx-auto px-4 text-center'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in'>
          Batista Reviver <br />
          <span className='text-primary-light'>UMA NOVA CHANCE</span>
        </h1>

        <p
          className='text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-slide-in'
          style={{ animationDelay: '0.1s' }}
        >
          Uma igreja Batista firmada na palavra de Deus e no poder do Espírito
          Santo
        </p>
      </div>
    </section>
  );
}
