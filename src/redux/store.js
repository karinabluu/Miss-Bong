import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../redux/slice/loginSlice';
import joinSlice from './slice/joinSlice';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import students from './modules/students';

export const rootReducer = combineReducers({
  students,
});

export const store = configureStore({
  reducer: { login: loginSlice, join: joinSlice },
});

// const store = createStore(rootReducer);
// store 중복 해결 요망
