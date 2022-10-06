import { deleteWord as deleteWordFromServer } from '../../api/delete';
import { useAppDispatch } from '../../app/hooks';
import { Word } from '../../types/Word';
import { deleteWord } from '../WordsList/WordsListSlice';

import './WordItem.scss';

type Props = {
  word: Word;
};

export const WordItem: React.FC<Props> = ({ word }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (word.id) {
      deleteWordFromServer(word.id);
      dispatch(deleteWord(word.id));
    }
  };

  return (
    <tr className="WordItem">
      <td className="WordItem__cell">
        <button
          type="button"
          onClick={handleClick}
          className="WordItem__delete"
        >
          <i className="WordItem__icon fas fa-square-xmark" />
        </button>
      </td>
      <td className="WordItem__cell">
        {word.origWord}
      </td>
      <td className="WordItem__cell">
        {word.translWord}
      </td>
    </tr>
  );
};
