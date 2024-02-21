import AButton from '../../shared/AButton';
import { motion } from 'framer-motion';

type Props = {
  name: string;
  image: string;
  role: string;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Dentist = ({ name, role, image }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className='relative flex items-center mb-24 flex-col  justify-end bg-gray-100 py-10 px-20 rounded-[50px] h-60 transition-colors duration-300 hover:cursor-pointer hover:bg-primary-500 hover:text-white'
    >
      <div className='h-40 w-40 absolute -top-16'>
        <img src={image} alt='doctor1' className='h-full w-full rounded-full' />
      </div>
      <h1 className='text-1xl mb-2 text-primary-100'>{name}</h1>
      <p className='text-md mb-2'>{role}</p>
      <AButton>About more</AButton>
    </motion.div>
  );
};

export default Dentist;
