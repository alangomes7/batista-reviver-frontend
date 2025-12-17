import HeroCarousel from '@/components/Hero/HeroCarousel';
import HeroMap from '@/components/Hero/HeroMap';
import InfiniteCardList from '@/components/InfiniteCardList';

import { HERO_BANNER } from './home_data/hero_banner';
import { HERO_CARD_EVENTOS } from './home_data/hero_card_eventos';
import { HERO_CARD_ESTUDO } from './home_data/hero_card_estudo';
import HeroImage from '@/components/Hero/HeroImage';
import HeroArt from '@/components/Hero/HeroArt';
import HeroCardList from '@/components/Hero/HeroCardList';

export default function Home() {
  return (
    <div className='gap-4'>
      <HeroCarousel slides={HERO_BANNER} />
      <HeroImage
        heroTitle='Na presença do Rei'
        heroSubtitle='Tema 2026'
        imageSrc='/homePage/HeroImage/tema.jpeg'
        description='“os vinte e quatro anciãos se prostravam diante daquele que está
          sentado no trono, adoravam o que vive para todo o sempre e depositavam
          as suas coroas diante do trono,proclamando: “Tu és digno, Senhor e
          Deus nosso, de receber a glória, a honra e o poder, porque criaste
          todas as coisas e por tua vontade elas vieram a existir e foram
          criadas.” Apocalipse 4:10-11 NAA'
      />
      <section className='h-full w-full'>
        <InfiniteCardList
          slides={HERO_CARD_EVENTOS}
          title={'Últimos eventos'}
        />
      </section>
      <HeroArt
        title={'Leitura da Bíblia'}
        subtitle1='Plano de Leitura Anual'
        subtitle2='2026'
        description={'Participe da nossa turma de leitura da Bíblia 2026'}
        ctaLabel='entre no nosso grupo de leitura'
        ctaHref={'https://chat.whatsapp.com/Fr6PUizgFNuGc9ERKqPLRv'}
        backgroundImageDesktop='/homePage/biblia/background-desktop.png'
        backgroundImageMobile='/homePage/biblia/background-mobile.jpg'
      />
      <HeroCardList
        title={'Estudo'}
        subtitle='Acompanhe os nossos guias de estudos'
        cards={HERO_CARD_ESTUDO}
      />
      <HeroMap
        title='Venha nos visitar'
        description='Nós estamos localizados no coração da cidade de Tanguá, na região metropolitana do estado do Rio de Janeiro. Venha nos fazer uma visita.'
        mapEmbedUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.99430136589646!2d-42.71926924029005!3d-22.731630106080676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99c4a7b027057f%3A0xf0682d6ba29eafa4!2sMinist%C3%A9rio%20Batista%20do%20Avivamento!5e0!3m2!1sen!2sbr!4v1763381588631!5m2!1sen!2sbr'
      />
    </div>
  );
}
