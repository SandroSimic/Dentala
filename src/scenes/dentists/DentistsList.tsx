import Dentist from './Dentist';
import { Dentists } from '../../shared/types';
import doctorImg from '../../assets/doctor1.jpg';
import doctorImg2 from '../../assets/doctor1.jpg';
import doctorImg3 from '../../assets/doctor1.jpg';
import doctorImg4 from '../../assets/doctor1.jpg';
import { motion } from 'framer-motion';

const dentists: Array<Dentists> = [
  {
    name: 'Christopher Dyer',
    image: doctorImg,
    role: 'Dentist surgeon',
  },
  {
    name: 'Madeleine Bond',
    image: doctorImg2,
    role: 'Dentist surgeon',
  },
  {
    name: 'Bernadette Carr',
    image: doctorImg3,
    role: 'Dentist surgeon',
  },
  {
    name: 'Nicholas Allan',
    image: doctorImg4,
    role: 'Dentist surgeon',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const DentistsList = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
      className='flex flex-col mt-40 md:flex-row md:w-full md:items-center md:justify-between md:flex-wrap'
    >
      {dentists.map((dentist: Dentists) => (
        <Dentist
          name={dentist.name}
          role={dentist.role}
          image={dentist.image}
        />
      ))}
    </motion.div>
  );
};

export default DentistsList;
