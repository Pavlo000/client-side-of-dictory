import axios from 'axios';
import { Word } from '../types/Word';

export const BASE_URL = 'https://pavlo000-dictory-server.herokuapp.com';

export const getWords = (): Promise<Word[] | string> => {
  return axios.get(`${BASE_URL}/words`)
    .then(res => res.data)
    .catch((error) => {
      return error.message;
    });
};
