import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Word } from '../../types/Word';
import { getRandomNumber } from '../../utils/randomNumber';
import { addFalseAnswears, addTrueAnswears } from './AnswearSlice';

import './Answears.scss';

type Props = {
  questionNumber: number;
  questionsId: string[];
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const Answears: React.FC<Props> = ({
  questionNumber,
  questionsId,
  setQuestionNumber,
}) => {
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) => state.wordsList.words);

  const rightAnswear = words.find(
    (word) => word.id === questionsId[questionNumber],
  );

  const [badAnswears, setBadAnswears] = useState<Word[]>(
    words.filter(
      (word) => word.id !== questionsId[questionNumber],
    ).slice(0, 3),
  );

  const [randomSortAnswear, setRandomSortAnswears] = useState(
    getRandomNumber(0, badAnswears.length - 1),
  );

  const handleClick = (val: boolean) => {
    const lastQuestion = questionsId.length;

    if (questionNumber < lastQuestion) {
      dispatch(val ? addTrueAnswears() : addFalseAnswears());

      setQuestionNumber(questionNumber + 1);
    }
  };

  useEffect(() => {
    const wordsExceptAnswear = words.filter(
      (word) => word.id !== questionsId[questionNumber],
    );
    const shuffleWords = wordsExceptAnswear.sort(() => Math.random() - 0.5);
    const countAnswears = 4;

    setBadAnswears(shuffleWords.slice(0, countAnswears));

    setRandomSortAnswears(getRandomNumber(0, badAnswears.length - 1));
  }, [questionNumber]);

  return (
    <ul className="Answears">
      {rightAnswear
        && badAnswears.map((badAnswear, index) => {
          if (index === randomSortAnswear) {
            return (
              <li key={badAnswear.id}>
                <button
                  className="Answears__button"
                  type="button"
                  onClick={() => handleClick(true)}
                >
                  {rightAnswear.translWord}
                </button>
              </li>
            );
          }

          return (
            <li key={badAnswear.id}>
              <button
                className="Answears__button"
                type="button"
                onClick={() => handleClick(false)}
              >
                {badAnswear.translWord}
              </button>
            </li>
          );
        })}
    </ul>
  );
};
