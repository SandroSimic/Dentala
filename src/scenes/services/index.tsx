import { ServiceType } from '../../shared/types';
import Service from './Service';
import { FaTooth } from 'react-icons/fa';
import { GiTooth, GiToothbrush } from 'react-icons/gi';
import { PiToothFill } from 'react-icons/pi';
import { motion } from 'framer-motion';
import DefaultButton from '../../shared/DefaultButton';

const services: Array<ServiceType> = [
  {
    icon: <FaTooth />,
    title: 'Teeth Alignment',
    description: 'Engage fully tested process top line platform clients.',
    iconBg: 'bg-primary-500',
    shadowColor: 'shadow-primary-500/50',
    borderColor: 'border-primary-50',
  },
  {
    icon: <GiTooth />,
    title: 'Dental Surgery',
    description: 'Engage fully tested process top line platform clients.',
    iconBg: 'bg-pink-500',
    shadowColor: 'shadow-pink-500/50',
    borderColor: 'border-pink-500/50',
  },
  {
    icon: <PiToothFill />,
    title: 'Cavity Inspection',
    description: 'Engage fully tested process top line platform clients.',
    iconBg: 'bg-purple-500',
    shadowColor: 'shadow-purple-500/50',
    borderColor: 'border-purple-500/50',
  },
  {
    icon: <GiToothbrush />,
    title: 'Teeth Whitening',
    description: 'Engage fully tested process top line platform clients.',
    iconBg: 'bg-cyan-500',
    shadowColor: 'shadow-cyan-500/50',
    borderColor: 'border-cyan-500/50',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Services = () => {
  return (
    <section
      id='services'
      className='flex flex-col items-center  w-5/6 py-10 mx-auto bg-white'
    >
      <motion.div
        className='text-center text-5xl'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className='text-black font-medium leading-tight'>
          Turning you smile into <br />{' '}
          <span className='text-primary-300'>an experience</span>
        </h1>
      </motion.div>
      <motion.div
        className='my-20 flex flex-col justify-between gap-8 md:flex-row'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
      >
        {services.map((service: ServiceType) => (
          <Service
            icon={service.icon}
            title={service.title}
            description={service.description}
            iconBg={service.iconBg}
            shadowColor={service.shadowColor}
            borderColor={service.borderColor}
          />
        ))}
      </motion.div>
      <div>
        <DefaultButton>Contact Us</DefaultButton>
      </div>
    </section>
  );
};

export default Services;
