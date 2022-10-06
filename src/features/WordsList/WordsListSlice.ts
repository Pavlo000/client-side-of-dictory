/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Word } from '../../types/Word';

export interface WordsListState {
  words: Word[];
}

export const initialState: WordsListState = {
  words: [],
};

export const wordsListSlice = createSlice({
  name: 'WordsList',
  initialState,
  reducers: {
    setWords: (state, action: PayloadAction<Word[]>) => {
      state.words = action.payload;
    },
    addWord: (state, action: PayloadAction<Word>) => {
      state.words.push(action.payload);
    },
    deleteWord: (state, action: PayloadAction<string>) => {
      state.words = state.words.filter(word => word.id !== action.payload);
    },
  },
});

export const { setWords, addWord, deleteWord } = wordsListSlice.actions;
export default wordsListSlice.reducer;
