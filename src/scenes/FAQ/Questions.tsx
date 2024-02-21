import { QuestionType } from '../../shared/types';
import Question from './Question';

const questions: Array<QuestionType> = [
  {
    title: 'How to make an appointment at Dentala?',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consequatur ratione libero hic, eum deleniti optio unde repellat nulla nesciunt sed aspernatur quos voluptatem totam, cumque molestias ut tempore cum?',
  },
  {
    title: 'How to make an appointment at Usmile?',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consequatur ratione libero hic, eum deleniti optio unde repellat nulla nesciunt sed aspernatur quos voluptatem totam, cumque molestias ut tempore cum?',
  },
  {
    title: 'How to make an appointment at Dentala?',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consequatur ratione libero hic, eum deleniti optio unde repellat nulla nesciunt sed aspernatur quos voluptatem totam, cumque molestias ut tempore cum?',
  },
  {
    title: 'How to make an appointment at Usmile?',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consequatur ratione libero hic, eum deleniti optio unde repellat nulla nesciunt sed aspernatur quos voluptatem totam, cumque molestias ut tempore cum?',
  },
  {
    title: 'How to make an appointment at Usmile?',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consequatur ratione libero hic, eum deleniti optio unde repellat nulla nesciunt sed aspernatur quos voluptatem totam, cumque molestias ut tempore cum?',
  },
];

const Questions = () => {
  return (
    <>
      {questions.map((question: QuestionType) => (
        <Question title={question.title} message={question.message} />
      ))}
    </>
  );
};

export default Questions;
