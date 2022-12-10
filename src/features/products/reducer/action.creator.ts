import { createAction } from '@reduxjs/toolkit';

import { ProductI } from '../types/products';
import { actionTypesProduct } from './action.types';
export const loadProducts = createAction<Array<ProductI>>(
    actionTypesProduct.load
);
