import { combineReducers } from 'redux';
import account from './account';
import test from './test';

export const storeUnauthenticated = combineReducers({
  account,
  test,
});

export const storeAuthenticated = combineReducers({
  data: (state = {}) => state,
  account,
  test,
});