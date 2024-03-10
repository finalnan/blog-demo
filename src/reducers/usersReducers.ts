import { createReducer } from '@reduxjs/toolkit';

const initialState: any = [];

export default createReducer(initialState, (builder) => {
  builder
    .addCase('FETCH_USER', (state, action: any) => [...state, action.payload])
    .addDefaultCase((state) => state);
});
