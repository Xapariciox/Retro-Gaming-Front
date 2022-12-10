import { createReducer } from '@reduxjs/toolkit';
import { ProductI } from '../types/products';
import * as ac from './action.creator';
const initialState: Array<ProductI> = [];
export const productReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadProducts, (_state, action) => action.payload);
});
