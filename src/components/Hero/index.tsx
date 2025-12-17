export default function Hero() {
  return (
    <section className='bg-linear-to-b from-blue-50 to-white py-20 lg:py-32'>
      <div className='container mx-auto px-4 text-center'>
        <h1 className='text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6'>
          Build faster with <span className='text-blue-600'>Next.js</span>
        </h1>
        <p className='text-lg lg:text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
          Create performant, scalable, and beautiful landing pages in minutes
          using the App Router and Tailwind CSS.
        </p>
        <div className='flex justify-center gap-4'>
          <button className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl'>
            Start Free Trial
          </button>
          <button className='bg-white text-gray-700 border border-gray-200 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition'>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
