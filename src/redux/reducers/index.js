import { combineReducers } from 'redux';
import account from './account';
import auth from './auth';
import test from './test';

export const storeUnauthenticated = combineReducers({
  auth,
  account,// !!! hide this when i connected to server
  // test,
});

export const storeAuthenticated = combineReducers({
  auth,
  account,
  test,
});