type Props = {
  number: string;
  title: string;
};

const Stat = ({ number, title }: Props) => {
  return (
    <div className='flex flex-col items-baseline gap-4 md:items-center'>
      <h1 className='font-bold text-4xl text-primary-500'>
        {number}
        <span className='text-primary-300'>+</span>
      </h1>
      <p className='font-bold text-black'>{title}</p>
    </div>
  );
};

export default Stat;
