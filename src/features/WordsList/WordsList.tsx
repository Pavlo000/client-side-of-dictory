import { useAppSelector } from '../../app/hooks';
import { WordItem } from '../WordItem';

import './WordsList.scss';

export const WordsList: React.FC = () => {
  const words = useAppSelector((state) => state.wordsList.words);

  return (
    <div className="WordsList">
      <table className="WordsList__table">
        <thead>
          <tr>
            <th className="WordsList__header-item">Delete</th>
            <th className="WordsList__header-item">English</th>
            <th className="WordsList__header-item">Ukrainian</th>
          </tr>
        </thead>

        <tbody>
          {words.map((word) => (
            <WordItem word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
