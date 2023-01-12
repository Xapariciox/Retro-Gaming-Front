import { createReducer } from '@reduxjs/toolkit';

import { UserI } from '../types/types';
import * as ac from './action.creator';

const initialState: {
    token: string | null;
    isLogged: boolean;
    isLogging: boolean;
    user: UserI | null;
} = { user: null, token: null, isLogged: false, isLogging: false };

export const userReducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.startlogin, (state) => ({
        ...state,
        token: null,
        isLogged: false,
        isLogging: true,
        user: null,
    }));
    builder.addCase(ac.loginFinish, (state, action) => ({
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isLogged: true,
        isLogging: false,
    }));
    builder.addCase(ac.logoutFinish, (state) => ({
        ...state,
        token: null,
        user: null,
        isLogged: false,
        isLogging: false,
    }));

    builder.addCase(ac.addCart, (state, action) => ({
        ...state,
        user: {
            ...(state.user as UserI),
            cart: [...(state.user as UserI).cart, action.payload],
        },
    }));
    builder.addCase(ac.addFavorites, (state, action) => ({
        ...state,
        user: {
            ...(state.user as UserI),
            favorites: [...(state.user as UserI).favorites, action.payload],
        },
    }));
    builder.addCase(ac.deleteCart, (state, action) => ({
        ...state,
        user: {
            ...(state.user as UserI),
            cart: (state.user as UserI).cart.filter(
                (item) => item.product.id !== action.payload.product.id
            ),
        },
    }));
    builder.addCase(ac.favoritesDelete, (state, action) => ({
        ...state,
        user: {
            ...(state.user as UserI),
            favorites: (state.user as UserI).favorites.filter(
                (item) => item.id !== action.payload.id
            ),
        },
    }));
    builder.addCase(ac.buyCart, (state, action) => ({
        ...state,
        user: {
            ...(state.user as UserI),
            purchasedProducts: [
                ...(state.user as UserI).purchasedProducts.concat(
                    action.payload
                ),
            ],
            cart: [],
        },
    }));
    builder.addCase(ac.editAmountCart, (state, action) => ({
        ...state,
        user: {
            ...(state.user as UserI),
            cart: [
                ...(state.user as UserI).cart.map((item) =>
                    item.amount !== action.payload.amount &&
                    item.product.id === action.payload.product.id
                        ? action.payload
                        : item
                ),
            ],
        },
    }));
    builder.addCase(ac.deleteAccount, (state) => ({
        ...state,
        token: null,
        user: null,
        isLogged: false,
        isLogging: false,
    }));
    builder.addDefaultCase((state) => state);
});
