import {createSlice} from '@reduxjs/toolkit';

const initState = [];

export const category = createSlice({
  name: 'category',
  initialState: initState,
  reducers: {
    add: (state, action) => {
      return action.payload;
    },
  },
});

export const {add} = category.actions;
export default category.reducer;
