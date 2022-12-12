import { UserI } from '../types/types';
import { actionTypesUser } from './action.types';
import { userReducer } from './reducer';

describe('Given the function userReducer', () => {
    const userMock: UserI = {
        name: 'pepe',
        password: '12345',
        id: '2',
        email: '@gmail.com',
        imageProfile: 'url',
        purchasedProducts: [{ id: 'hola', amount: 2, isBuy: true }],
        favorites: [],
        cart: [
            {
                id: 'hola',
                amount: 2,
                isBuy: true,
                token: 'szzz',
            },
        ],
    };

    let action: { type: string; payload: unknown };
    let state: {
        user: UserI | null;
        token: string | null;
        isLogged: boolean;
        isLogging: boolean;
    };

    describe('When the action is startlogin', () => {
        test('Then the returned state should include the action payload', () => {
            action = {
                type: actionTypesUser.startlogin,
                payload: {
                    isLogging: true,
                },
            };
            state = {
                user: null,
                token: null,
                isLogged: false,
                isLogging: true,
            };

            const result = userReducer(state, action);
            expect(result.isLogging).toBe(true);
        });
    });
    describe('When the action is login', () => {
        test('Then the returned state should include the action payload', () => {
            action = {
                type: actionTypesUser.loginFinish,
                payload: {
                    user: userMock,
                    token: 'token',
                    isLogged: true,
                    isLogging: false,
                },
            };
            state = {
                user: null,
                token: null,
                isLogged: false,
                isLogging: true,
            };
            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe('When the action is logout', () => {
        test('Then the returned state should be the action payload', () => {
            action = {
                type: actionTypesUser.logoutFinish,
                payload: {
                    user: null,
                    token: null,
                    isLogged: false,
                    isLogging: false,
                },
            };
            state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe('When the action is addCart', () => {
        test('Then the returned state should be the original state', () => {
            action = {
                type: actionTypesUser.addCart,
                payload: { productId: '2', amount: 1 },
            };
            state = state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };
            const result = userReducer(state, action);
            expect(result.user?.cart.at(-1)).toEqual(action.payload);
        });
    });
    describe('When the action is addCart', () => {
        test('Then the returned state should be the original state', () => {
            action = {
                type: actionTypesUser.addFavorites,
                payload: { productId: '23' },
            };
            state = state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };
            const result = userReducer(state, action);
            expect({ productId: result.user?.favorites.at(-1) }).toEqual(
                action.payload
            );
        });
    });
    describe('When the action is deleteCart', () => {
        test('Then the returned state should be the original state', () => {
            action = {
                type: actionTypesUser.deleteCart,
                payload: { productId: 'hola', amount: 1 },
            };
            state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result.user?.cart).toEqual([]);
        });
    });

    describe('When the action is update', () => {
        test('Then the returned state should be the original state and update the order', () => {
            action = {
                type: actionTypesUser.editAmountCart,
                payload: { productId: 'hola', amount: 2 },
            };
            state = state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result.user?.cart.at(-1)).toEqual(action.payload);
        });
        test('Then the returned state should be the original state', () => {
            action = {
                type: actionTypesUser.editAmountCart,
                payload: {
                    productId: '1',
                    amount: 2,
                    isBuy: true,
                    token: 'szzz',
                },
            };
            state = state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result.user?.cart).toEqual([
                { productId: 'hola', amount: 2, isBuy: true, token: 'szzz' },
            ]);
        });
    });
    describe('When the action is deletefavorites', () => {
        const userMock2: UserI = {
            name: 'pepe',
            password: '12345',
            id: '2',
            email: '@gmail.com',
            imageProfile: 'url',
            purchasedProducts: [{ id: 'hola', amount: 2, isBuy: true }],
            favorites: [],
            cart: [
                {
                    id: '2',
                    amount: 2,
                    isBuy: true,
                    token: 'szzz',
                },
            ],
        };
        test('Then the returned state should be the original state', () => {
            action = {
                type: actionTypesUser.favoritesDelete,
                payload: { productId: '5', amount: 1 },
            };
            state = {
                user: userMock2,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result.user?.favorites).toEqual([]);
        });
    });
});
