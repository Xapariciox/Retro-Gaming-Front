import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../../features/products/reducer/reducer';
import { ProductI } from '../../features/products/types/products';
import { userReducer } from '../../features/users/reducer/reducer';
import { userCart } from '../../features/users/types/types';
import { rootState } from '../store/store';

export const orderMock = {
    productId: { name: 'mock' } as ProductI,
    amount: 1,
};
export const userMock = {
    name: 'pepe',
    password: '12345',
    id: '2',
    email: '@gmail.com',
    imageProfile: 'url',
    purchasedProducts: [{ id: 'hola', amount: 2, isBuy: true }],
    favorites: [{ id: '2' }] as Array<ProductI>,
    cart: [
        {
            amount: 1,
            isBuy: false,
            product: {
                id: '3',
                name: 'pepe',
                image: '',
                brand: '',
                category: '',
                date: '',
                description: '',
                price: 0,
                stock: 5,
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
        user: userMock,
        token: 'token',
        isLogged: true,
        isLogging: false,
    },
    products: [productMock],
};
export const mockStore = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
    },
    preloadedState,
});
export const UserCartMock: userCart = {
    amount: 0,
    isBuy: false,
    product: {
        id: '3',
        name: 'pepe',
        image: 'url',
        date: '22-20-2022',
        description: 'prueba',
        stock: 1,
        brand: 'prueba',
        price: 2,
        category: 'console',
    },
};
