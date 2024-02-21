import { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

type Props = {
  title: string;
  message: string;
};

const Question = ({ title, message }: Props) => {
  const [isOpenMessage, setIsOpenMessage] = useState<boolean>(false);

  return (
    <div
      onClick={() => setIsOpenMessage(!isOpenMessage)}
      className=' flex flex-col items-center w-full  bg-primary-100 rounded-3xl'
    >
      <div className='flex justify-between items-center w-full  p-4'>
        <h3 className='text-xl text-white font-bold'>{title}</h3>{' '}
        {isOpenMessage ? (
          <ChevronUpIcon className='h-6 w-6 text-red-50' />
        ) : (
          <ChevronDownIcon className='h-6 w-6 text-red-50' />
        )}
      </div>
      {isOpenMessage && (
        <div className='my-1 text-sm text-white p-6'>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
