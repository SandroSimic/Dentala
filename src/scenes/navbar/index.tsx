import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from './Link';
import { SelectedPage } from '../../shared/types';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ setSelectedPage }: Props) => {
  const flexBetween = `flex items-center justify-between`;

  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>();

  return (
    <nav className='flex justify-center border-b-[1px] border-white h-28'>
      <div className={`${flexBetween} text-white h-full w-5/6`}>
        <h1 className='text-3xl font-bold'>Dentala</h1>

        {isAboveMediumScreens ? (
          <>
            <ul className='flex gap-12 text-xl'>
              <Link page='Home' setSelectedPage={setSelectedPage} />
              <Link page='Services' setSelectedPage={setSelectedPage} />
              <Link page='About Us' setSelectedPage={setSelectedPage} />
              <Link page='Reviews' setSelectedPage={setSelectedPage} />
              <Link page='FAQ' setSelectedPage={setSelectedPage} />
            </ul>

            <button
              className='bg-white text-primary-300 py-5 px-7 
              rounded-[15px] font-bold transition duration-300
              hover:bg-primary-300 hover:text-white'
            >
              Let's Talk
            </button>
          </>
        ) : (
          <button
            className='rounded-full bg-primary-300 p-2'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Bars3Icon className='h-6 w-6 text-white' />
          </button>
        )}
      </div>

      {/* MOBILE VIEW */}

      {!isAboveMediumScreens && isMenuToggled && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-full bg-primary-500 drop-shadow-xl'>
          <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className=' h-12 w-12 text-secondary-500' />
            </button>
          </div>

          <ul className='h-full flex flex-col gap-12 text-2xl text-white justify-center items-center -mt-36'>
            <Link page='Home' setSelectedPage={setSelectedPage} />
            <Link page='Services' setSelectedPage={setSelectedPage} />
            <Link page='About Us' setSelectedPage={setSelectedPage} />
            <Link page='Reviews' setSelectedPage={setSelectedPage} />
            <Link page='FAQ' setSelectedPage={setSelectedPage} />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
