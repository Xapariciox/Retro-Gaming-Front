import { userCart, UserI, UserToken } from '../types/types';
import { createAction } from '@reduxjs/toolkit';
import { actionTypesUser } from './action.types';
import { ProductI } from '../../products/types/products';
export const startlogin = createAction<void>(actionTypesUser.startlogin);
export const loginFinish = createAction<UserToken>(actionTypesUser.loginFinish);
export const addCart = createAction<userCart>(actionTypesUser.addCart);
export const addFavorites = createAction<ProductI>(
    actionTypesUser.addFavorites
);
export const deleteCart = createAction<userCart>(actionTypesUser.deleteCart);
export const favoritesDelete = createAction<ProductI>(
    actionTypesUser.favoritesDelete
);
export const buyCart = createAction<userCart>(actionTypesUser.buyCart);
export const editAmountCart = createAction<userCart>(
    actionTypesUser.editAmountCart
);
export const deleteAccount = createAction<void>(actionTypesUser.deleteAccount);
export const updateUser = createAction<UserI>(actionTypesUser.updateUser);
export const logoutFinish = createAction<void>(actionTypesUser.logoutFinish);
export const deletePurchasedProducts = createAction<void>(
    actionTypesUser.deletePurchasedProducts
);
