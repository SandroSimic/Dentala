import { StatType } from '../../shared/types';
import Stat from './Stat';

const stats: Array<StatType> = [
  {
    number: '1783',
    title: 'Happy Patients',
  },
  {
    number: '730',
    title: 'Online Appointments',
  },
  {
    number: '10',
    title: 'Years Of Experience',
  },
  {
    number: '94',
    title: 'Doctors and staff',
  },
];

const Stats = () => {
  return (
    <div className='my-20 flex flex-col items-baseline gap-8 md:flex-row md:justify-between md:w-full bg-primary-50 p-10 rounded-3xl'>
      {stats.map((stat) => (
        <Stat title={stat.title} number={stat.number} />
      ))}
    </div>
  );
};

export default Stats;
