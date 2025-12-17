// -----------------------------------------------------------------------------
// Component: HeroCardList (Main Export)
// Responsibilities: Page Layout, Section Styling, Title, Data Passing
// -----------------------------------------------------------------------------

import { AnimatedTitle } from '@/components/Animations/AnimatedTitle';
import { CardItem } from '@/components/Card1';
import { CardList } from '@/components/CardList';

interface HeroCardListProps {
  title: string;
  subtitle?: string;
  cards: CardItem[];
}

export default function HeroCardList({
  title,
  subtitle,
  cards,
}: HeroCardListProps) {
  return (
    <section className='relative flex h-auto w-full pt-8 flex-col justify-center overflow-hidden bg-(--background) text-(--foreground)'>
      <AnimatedTitle text={title} subtitle={subtitle} />
      <CardList cards={cards} />
    </section>
  );
}
