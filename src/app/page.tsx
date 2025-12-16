import HeroCarousel from '@/components/Hero/HeroCarousel';
import HeroMap from '@/components/Hero/HeroMap';
import HeroVideo from '@/components/Hero/HeroVideo';
import { HERO_SLIDES } from './home_components/heroSlides';
import { heroCardData } from './home_components/HeroCardItems';
import InfiniteCardList from '@/components/InfiniteCardList';
import HeroCardList from '@/components/Hero/HeroCardList';
import { heroCardEstudy } from './home_components/HeroCardEstudy';

export default function Home() {
  return (
    <>
      <HeroCarousel slides={HERO_SLIDES} />
      <HeroVideo
        title='Nossa Missão'
        subtitle='2024 Ano de Reviver'
        videoSrc='https://www.youtube.com/embed/L3w3e0ExxcY'
        videoTitle='Vídeo Institucional Batista Reviver'
      >
        {/* Rich Text Content */}
        <p className='text-lg md:text-xl leading-relaxed text-justify md:text-left'>
          Somos uma comunidade dedicada a transformar vidas através do amor e da
          palavra. Acreditamos que cada pessoa tem um propósito único e divino.
          Neste vídeo, compartilhamos testemunhos reais de superação, fé e
          renovo espiritual que marcam a trajetória da
          <span className='font-bold text-primary ml-1'>Batista Reviver</span>.
          Junte-se a nós nesta jornada de descoberta e crescimento espiritual,
          onde o passado não define o seu futuro, mas serve como alicerce para
          uma nova história escrita por Deus.
        </p>

        {/* Button / Actions */}
        <div className='mt-8 flex justify-center md:justify-start'>
          <button className='btn btn-primary'>Saiba Mais</button>
        </div>
      </HeroVideo>
      <section className='w-full'>
        <InfiniteCardList slides={heroCardData} title={'Últimos eventos'} />
      </section>
      <HeroCardList title={'Estudo'} cards={heroCardEstudy} />
      <HeroMap
        title='Venha nos visitar'
        description='Nós estamos localizados no coração da cidade de Tanguá, na região metropolitana do estado do Rio de Janeiro. Venha nos fazer uma visita.'
        mapEmbedUrl='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.99430136589646!2d-42.71926924029005!3d-22.731630106080676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99c4a7b027057f%3A0xf0682d6ba29eafa4!2sMinist%C3%A9rio%20Batista%20do%20Avivamento!5e0!3m2!1sen!2sbr!4v1763381588631!5m2!1sen!2sbr'
      />
    </>
  );
}
