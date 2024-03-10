import { createReducer } from '@reduxjs/toolkit';

const initialState: any = [];

export default createReducer(initialState, (builder) => {
  builder
    .addCase('FETCH_POSTS', (state, action: any) => action.payload)
    .addDefaultCase((state) => state);
});

// export default (state = [], action: any) => {
//   switch (action.type) {
//     case 'FETCH_POSTS':
//       return action.payload;

//     default:
//       return state;
//   }
// };
