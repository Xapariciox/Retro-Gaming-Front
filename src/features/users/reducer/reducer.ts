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
        isLogged: true,
        token: action.payload.token,
        isLogging: false,
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
                (item) => item.id !== action.payload.id
            ),
        },
        token: action.payload.token,
        isLogged: true,
        isLogging: false,
    }));
    builder.addCase(ac.favoritesDelete, (state, action) => ({
        ...state,
        user: {
            ...(state.user as UserI),
            favorites: (state.user as UserI).favorites.filter(
                (item) => item !== action.payload
            ),
        },
    }));
    builder.addCase(ac.buyCart, (state, action) => ({
        ...state,
        user: {
            ...(state.user as UserI), //Preguntar
            cart: [],
        },
        token: action.payload.token,
        isLogged: true,
        isLogging: false,
    }));
    builder.addCase(ac.editAmountCart, (state, action) => ({
        ...state,
        user: {
            ...(state.user as UserI),
            cart: (state.user as UserI).cart.map(
                (
                    item //Preguntar
                ) => (item.id === action.payload.id ? action.payload : item)
            ),
        },
        isLogged: false,
        isLogging: false,
        token: null,
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
