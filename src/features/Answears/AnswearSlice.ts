/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface AnswearsState {
  trueAnswears: number;
  falseAnswears: number;
}

export const initialState: AnswearsState = {
  trueAnswears: 0,
  falseAnswears: 0,
};

export const answearsSlice = createSlice({
  name: 'WordsList',
  initialState,
  reducers: {
    addTrueAnswears: (state) => {
      state.trueAnswears += 1;
    },
    addFalseAnswears: (state) => {
      state.falseAnswears += 1;
    },
    clearAnswears: (state) => {
      state.falseAnswears = 0;
      state.trueAnswears = 0;
    },
  },
});

export const { addFalseAnswears, addTrueAnswears, clearAnswears }
  = answearsSlice.actions;
export default answearsSlice.reducer;
