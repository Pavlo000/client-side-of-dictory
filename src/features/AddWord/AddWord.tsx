import { FormEvent, useState } from 'react';
import { postWord } from '../../api/post';
import { useAppDispatch } from '../../app/hooks';
import { addWord } from '../WordsList/WordsListSlice';
import './AddWord.scss';

export const AddWord: React.FC = () => {
  const dispatch = useAppDispatch();
  const [origWord, setOrigWord] = useState('');
  const [translWord, setTranslWord] = useState('');
  const [errorSubmit, setErrorSubmit] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!origWord) {
      setErrorSubmit('Please enter english word');
    }

    if (!translWord) {
      setErrorSubmit('Please enter ukrainian word');
    }

    if (!translWord && !origWord) {
      setErrorSubmit('Please enter ukrainian and english word');
    }

    if (origWord && translWord) {
      (async () => {
        const newWord = {
          origWord,
          translWord,
        };

        const newWordFromServer = await postWord(newWord);

        if (typeof newWordFromServer === 'string') {
          setErrorSubmit(newWordFromServer);
        } else {
          dispatch(addWord(newWordFromServer));
          setOrigWord('');
          setTranslWord('');
          setErrorSubmit('');
        }
      })();
    }
  };

  return (
    <form className="AddWord" onSubmit={handleSubmit}>
      <h2 className="AddWord__title">Add word</h2>

      <input
        type="text"
        className="AddWord__input"
        placeholder="Enter word on english"
        value={origWord}
        onChange={(event) => setOrigWord(event.target.value)}
      />

      <input
        type="text"
        className="AddWord__input"
        placeholder="Enter word on ukrainian"
        value={translWord}
        onChange={(event) => setTranslWord(event.target.value)}
      />

      <p className="AddWord__help">{errorSubmit}</p>

      <button type="submit" className="AddWord__button">
        Add
      </button>
    </form>
  );
};
