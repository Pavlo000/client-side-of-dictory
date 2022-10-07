import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Answears } from '../Answears';
import { clearAnswears } from '../Answears/AnswearSlice';

import './Question.scss';

export const Question: React.FC = () => {
  const dispatch = useAppDispatch();

  const words = useAppSelector((state) => state.wordsList.words);

  const [questionsId, setQuestionsId] = useState<string[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);

  const question = words.find(
    (word) => word.id === questionsId[questionNumber],
  );

  const countQuestions = 10;

  useEffect(() => {
    dispatch(clearAnswears());

    const wordsId = words.map((word) => word.id);

    const shuffleWordsId = wordsId
      .sort(() => Math.random() - 0.5)
      .slice(0, countQuestions);

    setQuestionsId(shuffleWordsId);
  }, []);

  return (
    <div className="Question">
      {question && (
        <>
          <h3>{`What does mean the word '${question.origWord}'?`}</h3>

          <Answears
            questionsId={questionsId}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </>
      )}

      {questionNumber === countQuestions && (
        <>
          <h3>You well done</h3>

          <Link to="/results" className="Question__link">
            Show results
          </Link>
        </>
      )}
    </div>
  );
};
