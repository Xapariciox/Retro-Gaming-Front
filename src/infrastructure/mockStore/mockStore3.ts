import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../../features/products/reducer/reducer';
import { ProductI } from '../../features/products/types/products';
import { userReducer } from '../../features/users/reducer/reducer';
import { UserI } from '../../features/users/types/types';
import { rootState } from '../store/store';

export const orderMock = {
    productId: { name: 'mock' } as ProductI,
    amount: 1,
};
export const userMock3 = {
    name: 'pepe',
    password: '12345',
    id: '2',
    email: '@gmail.com',
    imageProfile: 'url',
    purchasedProducts: [],
    favorites: [{ id: 'pepe', name: 'manio', image: 'url' }],
    cart: [
        {
            amount: 2,
            isBuy: true,
            product: {
                id: '5',
                name: 'alonso',
                image: 'link',
                brand: 'Gucci',
                category: 'Game',
                date: '20222',
                description: 'Hello',
                price: 9,
                stock: 7,
            },
        },
    ],
};
export const productMock: ProductI = {
    id: '2',
    name: 'pepe',
    image: 'url',
    date: '22-20-2022',
    description: 'prueba',
    stock: 1,
    brand: 'prueba',
    price: 2,
    category: 'console',
};
export const preloadedState: Partial<rootState> = {
    user: {
        user: userMock3 as unknown as UserI,
        token: 'token',
        isLogged: true,
        isLogging: false,
    },
    products: [productMock],
};
export const mockStore3 = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
    },
    preloadedState,
});
