import { productsInCart, UserToken } from '../types/types';
import { createAction } from '@reduxjs/toolkit';
import { actionTypesUser } from './action.types';
export const startlogin = createAction<void>(actionTypesUser.startlogin);
export const loginFinish = createAction<UserToken>(actionTypesUser.loginFinish);
export const logoutFinish = createAction<void>(actionTypesUser.logoutFinish);
export const addCart = createAction<productsInCart>(actionTypesUser.addCart);
export const addFavorites = createAction<string>(actionTypesUser.addFavorites); // preguntar
export const deleteCart = createAction<productsInCart>(
    actionTypesUser.deleteCart
);
export const favoritesDelete = createAction<string>(
    actionTypesUser.favoritesDelete
); //preguntar
export const buyCart = createAction<productsInCart>(actionTypesUser.buyCart); // preguntar
export const editAmountCart = createAction<productsInCart>(
    actionTypesUser.editAmountCart
);
export const deleteAccount = createAction<void>(actionTypesUser.deleteAccount);
