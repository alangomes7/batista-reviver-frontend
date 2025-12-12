import { ReactNode } from 'react';

type VisaoFeECruzProps = {
  markdown: ReactNode;
};

export default function VisaoFeECruzClient({ markdown }: VisaoFeECruzProps) {
  return (
    <div className='prose prose-lg dark:prose-invert max-w-5xl mx-auto'>
      {markdown}
    </div>
  );
}
