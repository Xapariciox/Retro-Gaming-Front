import { productsInCart, productsInFavorites, UserToken } from '../types/types';
import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './action.types';
export const startlogin = createAction<void>(actionTypes.startlogin);
export const loginFinish = createAction<UserToken>(actionTypes.loginFinish);
export const logoutFinish = createAction<void>(actionTypes.logoutFinish);
export const addCart = createAction<productsInCart>(actionTypes.addCart);
export const addFavorites = createAction<productsInFavorites>(
    actionTypes.addFavorites
); // preguntar
export const deleteCart = createAction<productsInCart>(actionTypes.deleteCart);
export const favoritesDelete = createAction<productsInFavorites>(
    actionTypes.favoritesDelete
); //preguntar
export const buyCart = createAction<productsInCart>(actionTypes.buyCart); // preguntar
export const editAmountCart = createAction<productsInCart>(
    actionTypes.editAmountCart
);
