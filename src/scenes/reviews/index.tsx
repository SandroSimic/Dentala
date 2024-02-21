import ReviewsList from './ReviewsList';

const Reviews = () => {
  return (
    <section id='reviews' className='min-h-screen '>
      <div className='flex flex-col items-center min-h-screen mx-auto  justify-baseline'>
        <div className='text-center flex flex-col w-4/6 justify-center gap-4   '>
          <h1 className='text-primary-500 text-4xl font-bold '>
            What patients say <span className='text-primary-100'>about us</span>
          </h1>
          <p>
            Dentail Care Seattle is a top-rated local practice for cosmetic,
            preventativem and restorative dentisrty on First hill.
          </p>
        </div>
        <ReviewsList />
      </div>
    </section>
  );
};

export default Reviews;
