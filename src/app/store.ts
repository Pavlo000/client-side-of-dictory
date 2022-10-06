import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import wordsListReducer from '../features/WordsList/WordsListSlice';
import answearsReducer from '../features/Answears/AnswearSlice';

export const store = configureStore({
  reducer: {
    wordsList: wordsListReducer,
    answears: answearsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
