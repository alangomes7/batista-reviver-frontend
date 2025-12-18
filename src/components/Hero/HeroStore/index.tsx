// HeroStore.tsx
import { HeroStoreMobile } from './subcomponents/HeroStoreMobile';
import { HeroStoreDesktop } from './subcomponents/HeroStoreDesktop';
import { HeroStoreProps } from './types';

export default function HeroStore(props: HeroStoreProps) {
  return (
    <div className='relative w-full h-screen overflow-hidden bg-(--background) text-(--foreground) transition-colors duration-300'>
      <HeroStoreMobile {...props} />
      <HeroStoreDesktop {...props} />
    </div>
  );
}
