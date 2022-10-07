import axios from 'axios';
import { BASE_URL } from '.';
import { Word } from '../types/Word';

export const deleteWord = (wordId: string): Promise<Word | string> => {
  return axios
    .delete(`${BASE_URL}/words/${wordId}`)
    .then((res) => res.data)
    .catch((error) => {
      return error.message;
    });
};
