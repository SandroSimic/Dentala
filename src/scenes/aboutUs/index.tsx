import AboutUsGraphic from '../../assets/AboutUsGraphic.jpg';
import YellowBlob from '../../assets/yellowBlog.png';
import DefaultButton from '../../shared/DefaultButton';
import AButton from '../../shared/AButton';
import Stats from './Stats';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id='aboutus' className='min-h-screen relative flex flex-col'>
      {/* WRAPPER CONTAINER */}
      <motion.div
        className='mt-20 mx-auto flex flex-col items-center justify-between w-5/6 z-20 md:my-auto'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/* HEADING CONTAINER */}
        <div className=' md:flex-row md:items-center md:justify-between md:gap-12 flex flex-col items-center gap-8'>
          {/* IMAGE CONTAINER */}
          <div className='w-96 h-full md:w-[600px] md:h-[600px]'>
            <img
              src={AboutUsGraphic}
              alt='Dentists'
              className='w-96 h-96 rounded-lg md:w-full md:h-full'
            />
          </div>
          {/* TEXT CONTAINER */}
          <div className='flex flex-col items-center gap-11  w-5/6 md:w-3/6 md:items-baseline'>
            <h1 className='text-3xl text-primary-500 font-bold text-center md:text-left'>
              A Personalized approach to creating the{' '}
              <span className='text-primary-300'>Perfect Smile</span>
            </h1>
            <p className='text-center md:text-left'>
              Dental Care Seattle is a top-rated local practice for cosmetic,
              preventative, and restorative dentisrty on First Hill. Dental Care
              Seattle is a top-rated local
            </p>
            <div className='flex flex-col items-center gap-10 md:flex-row'>
              <DefaultButton>Request appointment</DefaultButton>
              <AButton>About more</AButton>
            </div>
            <div className='max-w-52 flex flex-col gap-3'>
              <h1 className='text-primary-500 font-bold text-4xl'>4567+</h1>
              <p>5-stars reviews from our satisfied customers</p>
              <AButton>View More</AButton>
            </div>
          </div>
        </div>
        <Stats />
      </motion.div>
      <img
        src={YellowBlob}
        alt='Yellow Blob'
        className='absolute top-0 -left-[10rem] z-0 w-64 h-64'
      />
    </section>
  );
};

export default AboutUs;
