import FaqImage from '../../assets/FaqGraphic.jpg';
import Questions from './Questions';

const Faq = () => {
  return (
    <section
      id='faq'
      className='mt-10 min-h-full flex justify-center items-center md:m-0'
    >
      <div className='flex flex-col w-5/6 h-full items-center justify-between gap-12 md:flex-row '>
        <div className='flex flex-col gap-8 items-center md:self-center md:w-1/2 '>
          <h1 className='font-bold text-primary-500 text-4xl mb-10 md:self-baseline'>
            Frequently Asked <span className='text-primary-100'>Questions</span>
          </h1>
          <div className='flex flex-col gap-8 h-full w-full '>
            <Questions />
          </div>
        </div>
        <div className='h-[500px] md:h-[800px]  relative before:shadow-xl before:shadow-primary-500 before:content before:w-full before:h-full before:absolute before:bg-primary-500 before:-bottom-5 before:-right-5 before:z-[-1] before:rounded-3xl'>
          <img src={FaqImage} alt='Faq Image' className='rounded-3xl h-full' />
        </div>
      </div>
    </section>
  );
};

export default Faq;
