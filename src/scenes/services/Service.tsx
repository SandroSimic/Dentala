import AButton from '../../shared/AButton';
import { motion } from 'framer-motion';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  iconBg: string;
  shadowColor: string;
  borderColor: string;
};

const Service = ({
  icon,
  title,
  description,
  iconBg,
  shadowColor,
  borderColor,
}: Props) => {
  return (
    <motion.div
      className={`shadow-lg ${shadowColor} flex flex-col items-center justify-between p-8 border-2 ${borderColor} rounded-3xl`}
      variants={childVariant}
    >
      <div className={`${iconBg}  p-5 rounded-full`}>
        <span className='text-4xl flex items-center justify-center text-white'>
          {icon}
        </span>
      </div>
      <div className='my-5'>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
      <div className='mb-5 text-center'>
        <p>{description}</p>
      </div>

      <AButton>Read More</AButton>
    </motion.div>
  );
};

export default Service;
