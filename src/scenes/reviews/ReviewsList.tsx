import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useMediaQuery from '../../hooks/useMediaQuery';
import { ReviewType } from '../../shared/types';
import Review from './Review';

const reviews: Array<ReviewType> = [
  {
    user: 'John Doe',
    message:
      'Overall great experience, The dentist were very nice and so were the stall. I would definitely recommend this place to my friends and family.',
  },
  {
    user: 'Madeleine Carr',
    message:
      'Loved my first experience here they are friendly and personally made me fell comfortable and the were affordable i would recommend them to anyone',
  },
  {
    user: 'John Doe',
    message:
      'Overall great experience, The dentist were very nice and so were the stall. I would definitely recommend this place to my friends and family.',
  },
  {
    user: 'John Doe',
    message:
      'Overall great experience, The dentist were very nice and so were the stall. I would definitely recommend this place to my friends and family.',
  },
  {
    user: 'Madeleine Carr',
    message:
      'Loved my first experience here they are friendly and personally made me fell comfortable and the were affordable i would recommend them to anyone',
  },
  {
    user: 'John Doe',
    message:
      'Overall great experience, The dentist were very nice and so were the stall. I would definitely recommend this place to my friends and family.',
  },
];

const ReviewsList = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <div className='flex w-full justify-center items-center h-full m-auto p-12'>
      <Swiper
        spaceBetween={50}
        slidesPerView={isAboveMediumScreens ? 3 : 1}
        className='w-full'
      >
        {reviews.map((review: ReviewType) => (
          <SwiperSlide className='my-20'>
            <Review user={review.user} message={review.message} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsList;
