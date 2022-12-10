import { productsInCart, productsInFavorites, UserToken } from '../types/types';
import { createAction } from '@reduxjs/toolkit';
import { actionTypesUser } from './action.types';
export const startlogin = createAction<void>(actionTypesUser.startlogin);
export const loginFinish = createAction<UserToken>(actionTypesUser.loginFinish);
export const logoutFinish = createAction<void>(actionTypesUser.logoutFinish);
export const addCart = createAction<productsInCart>(actionTypesUser.addCart);
export const addFavorites = createAction<productsInFavorites>(
    actionTypesUser.addFavorites
); // preguntar
export const deleteCart = createAction<productsInCart>(
    actionTypesUser.deleteCart
);
export const favoritesDelete = createAction<productsInFavorites>(
    actionTypesUser.favoritesDelete
); //preguntar
export const buyCart = createAction<productsInCart>(actionTypesUser.buyCart); // preguntar
export const editAmountCart = createAction<productsInCart>(
    actionTypesUser.editAmountCart
);
