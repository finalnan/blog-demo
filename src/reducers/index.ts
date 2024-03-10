import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from './postsReducer';
import usersReducers from './usersReducers';

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducers,
});
