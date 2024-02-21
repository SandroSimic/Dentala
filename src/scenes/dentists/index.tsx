import DefaultButton from '../../shared/DefaultButton';
import DentistsList from './DentistsList';

const Dentists = () => {
  return (
    <section
      id='dentists'
      className='my-36  flex flex-col items-center justify-center'
    >
      <div className=' flex flex-col items-center justify-center w-5/6'>
        <div className='flex flex-col items-center justify-between gap-8 md:flex-row w-full'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-4xl text-primary-500 text-center font-bold md:text-left'>
              Meet our experts{' '}
              <span className='text-primary-100 '>dentist</span>
            </h1>
            <p className='text-center md:text-left md:w-4/6 text-xl text-black'>
              Dental Care Seattle is a top-rated local practice for cosmetic,
              preventative and restorative dentistry on First Hill
            </p>
          </div>
          <DefaultButton>View more dentist</DefaultButton>
        </div>
        <DentistsList />
      </div>
    </section>
  );
};

export default Dentists;
