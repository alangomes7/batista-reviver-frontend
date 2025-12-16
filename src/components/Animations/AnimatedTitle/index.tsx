import { motion, Variants } from 'framer-motion';

/**
 * Animated Title Component
 * Uses Framer Motion for a staggered fade-in-up effect
 */
export const AnimatedTitle = ({
  text,
  subtitle,
}: {
  text: string;
  subtitle?: string;
}) => {
  // Explicitly typing this as Variants fixes inference issues
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Explicitly typing this as Variants fixes the 'string' vs 'spring' error
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className='mb-12 flex flex-col items-center text-center z-10 relative px-4'
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <motion.h1
        className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6'
        variants={child}
      >
        {text.split(' ').map((word, index) => (
          <span key={index} className='inline-block mr-2'>
            {word === 'Hero' ? (
              <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500'>
                {word}
              </span>
            ) : (
              word
            )}
          </span>
        ))}
      </motion.h1>

      {subtitle && (
        <motion.p
          className='text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed'
          variants={child}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};
