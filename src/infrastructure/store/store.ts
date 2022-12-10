import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../features/users/reducer/reducer';
import { productReducer } from '../../features/products/reducer/reducer';

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
    },
});
export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
