import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import heroImage from '../../assets/HeroImage.png';
import wave from '../../assets/wave.svg';
import { motion } from 'framer-motion';

type Props = {};

const Hero = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section className='flex flex-col gap-16 md:h-full md:pb-0 overflow-hidden bg-gradient-primary'>
      {/* IMAGE AND MAIN HEADING */}
      <div className='flex flex-col mx-auto w-5/6 items-center justify-between  md:flex md:flex-row md:h-full md:mt-48'>
        {/* MAIN HEADING */}
        <motion.div
          className='my-20 z-10 md:basis-3/6 md:mt-0 flex flex-col gap-8'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className='text-4xl text-white font-bold xs:text-6xl'>
            Say everything with{' '}
            <span className='text-secondary-500'>your smile.</span>
          </h1>
          <p className='text-white text-lg'>
            Dental Care Seattle is a top-rated local practice for cosmetic,
            preventative, and restorative dentistry on First Hill.
          </p>
          <div className='flex items-center gap-8'>
            <button className='text-black bg-secondary-500 transition-colors duration-200 p-3 text-sm rounded-[20px] font-bold xs:p-5 sm:text-lg hover:bg-secondary-200'>
              Request appointment
            </button>
            <div className='text-white'>
              <p>or Call</p>
              <h3 className='font-bold'>+880 123 456 789</h3>
            </div>
          </div>
        </motion.div>
        {/* MAIN IMAGE */}
        <motion.div
          className='h-96'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: 150 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img
            src={heroImage}
            alt='Hero Image'
            className='h-full rounded-full'
          />
        </motion.div>
      </div>

      <img src={wave} alt='Hero Image' />
    </section>
  );
};

export default Hero;
