import Socials from './Socials';

const Footer = () => {
  return (
    <footer className='p-5 bg-primary-500 h-64  flex flex-col items-center justify-center gap-8'>
      <h1 className='text-4xl text-white font-bold'>Dentala</h1>
      <p className='text-white text-center'>
        Dental Care Seattle is a top-rated local practice for cosmetic,
        preventative, and restorative dentistry on First hill.
      </p>
      <Socials />
    </footer>
  );
};

export default Footer;
