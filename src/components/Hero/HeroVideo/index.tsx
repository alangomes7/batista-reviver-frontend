import clsx from 'clsx';

export default function HeroVideo() {
  return (
    <section
      className={clsx(
        'w-full py-16 md:py-24',
        'bg-background text-foreground',
        'border-b border-border',
      )}
    >
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-primary mb-4 animate-fade-in'>
            Nossa Missão
          </h2>
          <p
            className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in'
            style={{ animationDelay: '0.1s' }}
          >
            2024 Ano de Reviver
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 lg:gap-12 items-center'>
          <div
            className='w-full animate-fade-in'
            style={{ animationDelay: '0.2s' }}
          >
            <div className='relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-border'>
              <iframe
                className='absolute top-0 left-0 w-full h-full'
                src='https://www.youtube.com/embed/L3w3e0ExxcY'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              />
            </div>
          </div>

          <div className='animate-slide-in' style={{ animationDelay: '0.3s' }}>
            <div className='prose prose-lg text-foreground'>
              <p className='text-lg md:text-xl leading-relaxed text-justify md:text-left'>
                Somos uma comunidade dedicada a transformar vidas através do
                amor e da palavra. Acreditamos que cada pessoa tem um propósito
                único e divino. Neste vídeo, compartilhamos testemunhos reais de
                superação, fé e renovo espiritual que marcam a trajetória da
                <span className='font-bold text-primary ml-1'>
                  Batista Reviver
                </span>
                . Junte-se a nós nesta jornada de descoberta e crescimento
                espiritual, onde o passado não define o seu futuro, mas serve
                como alicerce para uma nova história escrita por Deus.
              </p>

              <div className='mt-8 flex justify-center md:justify-start'>
                <button className='btn btn-primary'>Saiba Mais</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
