import { SafeMarkdown } from '@/components/Markdown/SafeMarkdown';
import { cn } from '@/lib/utils';

type VisaoFeECruzProps = {
  markdown: string;
  imgUrl: string;
};

export default function VisaoFeECruzClient({
  markdown,
  imgUrl,
}: VisaoFeECruzProps) {
  return (
    <div className='w-full bg-background pb-24'>
      {/* Banner Section */}
      <div className='relative h-64 md:h-96 w-full overflow-hidden'>
        <img
          src={imgUrl}
          alt='Banner'
          className='h-full w-full object-cover transition-transform duration-700 hover:scale-105'
        />
        <div className='absolute inset-0 bg-black/20' />
      </div>

      {/* Floating Content Container */}
      <div className='container mx-auto px-4 relative z-10 -mt-24'>
        <div
          className={cn(
            'mx-auto max-w-7xl overflow-hidden rounded-xl border border-border bg-card-background p-8 md:p-12 shadow-xl',
            'animate-fade-in',
          )}
        >
          {/* Scrollable Markdown Content */}
          <div className='prose prose-lg dark:prose-invert max-w-none text-foreground'>
            <div className='max-h-[60vh] overflow-y-auto pr-4'>
              <SafeMarkdown markdown={markdown} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
