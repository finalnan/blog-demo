import _ from 'lodash';
import jsonplaceholder from '../apis/jsonplaceholder';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchPosts = createAsyncThunk('FETCH_POSTS', async () => {
//   const { data } = await jsonplaceholder.get('/posts');

//   return data;
// });

export const fetchPostsAndUsers =
  () => async (dispatch: any, getState: any) => {
    await dispatch(fetchPosts());

    // const userIDSet = [...new Set(_.map(getState().posts, 'userId'))];

    _.chain(getState().posts)
      .map('userId')
      .uniq()
      .each((id) => dispatch(fetchUser(id)))
      .value();
  };

export const fetchPosts = () => async (dispatch: any) => {
  const response = await jsonplaceholder.get('/posts');
  dispatch({
    type: 'FETCH_POSTS',
    payload: response.data,
  });
};

// export const fetchUser = (id: any) => async (dispath: any) =>
//   _fetchUser(id, dispath);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({
//     type: 'FETCH_USER',
//     payload: response.data,
//   });
// });
export const fetchUser = (id: any) => async (dispatch: any) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({
    type: 'FETCH_USER',
    payload: response.data,
  });
};
