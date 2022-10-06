import axios from 'axios';
import { BASE_URL } from '.';
import { Word } from '../types/Word';

export const postWord = (word: Omit<Word, 'id'>): Promise<Word | string> => {
  return axios.post(`${BASE_URL}/words`, word)
    .then(res => res.data)
    .catch((error) => {
      return error.message;
    });
};
