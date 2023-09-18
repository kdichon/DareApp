import {configureStore} from '@reduxjs/toolkit';
import categoryReducer from './category';
import counterReducer from './counter';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
  },
});
