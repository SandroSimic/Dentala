import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';

type Props = {
  message: string;
  user: string;
};

const Review = ({ message, user }: Props) => {
  return (
    <div className='border-2 border-primary-500 p-8 relative flex justify-center rounded-3xl'>
      <div className='absolute -top-16 bg-primary-500  justify-center inline-block p-5 rounded-full'>
        <ChatBubbleBottomCenterTextIcon className='h-16 w-16 text-white' />
      </div>
      <div className='flex flex-col items-center '>
        <h1 className='text-primary-500 text-xl font-bold text-center mt-10 mb-10'>
          "{message}"
        </h1>

        <div className='flex flex-col items-center gap-2'>
          <p className='text-primary-500 font-bold text-xl'>{user}</p>
          <p className='text-primary-100'>Happy patient</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
