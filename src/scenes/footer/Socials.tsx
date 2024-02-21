import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Socials = () => {
  return (
    <div className='flex gap-8 text-white items-center'>
      <FaFacebookF className='transition-colors duration-300  bg-primary-100  p-2 h-9 w-9 rounded-full hover:bg-primary-300 hover:cursor-pointer' />
      <FaInstagram className='transition-colors duration-300  bg-primary-100  p-2 h-9 w-9 rounded-full hover:bg-primary-300 hover:cursor-pointer' />
      <FaXTwitter className='transition-colors duration-300  bg-primary-100  p-2 h-9 w-9 rounded-full hover:bg-primary-300 hover:cursor-pointer' />
      <FaYoutube className='transition-colors duration-300  bg-primary-100  p-2 h-9 w-9 rounded-full hover:bg-primary-300 hover:cursor-pointer' />
    </div>
  );
};

export default Socials;
