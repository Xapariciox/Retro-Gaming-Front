import { ProductI } from '../../products/types/products';
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
        purchasedProducts: [
            {
                product: {
                    id: '2',
                    name: 'pepe',
                    image: '',
                    brand: '',
                    category: '',
                    date: '',
                    description: '',
                    price: 0,
                    stock: 5,
                },
                amount: 2,
                isBuy: true,
            },
        ],
        favorites: [],
        cart: [
            {
                amount: 1,
                isBuy: false,
                product: {
                    id: 'hola',
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
                payload: { id: '2', amount: 1 },
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
                payload: { id: '23' },
            };
            state = state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };
            const result = userReducer(state, action);
            expect({ id: result.user?.favorites.at(-1) }).toEqual({
                id: action.payload,
            });
        });
    });
    // describe('When the action is deleteCart', () => {
    //     test('Then the returned state should be the original state', () => {
    //         action = {
    //             type: actionTypesUser.deleteCart,
    //             payload: { id: 'hola', amount: 1 },
    //         };
    //         state = {
    //             user: userMock,
    //             token: 'token',
    //             isLogged: false,
    //             isLogging: false,
    //         };

    //         const result = userReducer(state, action);
    //         expect(result.user?.cart).toEqual([]);
    //     });
    // });

    describe('When the action is updateCart', () => {
        test('Then the returned state should be the original state and update the order', () => {
            action = {
                type: actionTypesUser.editAmountCart,
                payload: {
                    isBuy: false,
                    product: {
                        id: 'hola',
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
                    amount: 1,
                    isBuy: false,
                    product: {
                        id: 'hola',
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
            };
            state = state = {
                user: userMock,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result.user?.cart[0]).toEqual(action.payload);
        });
    });
    describe('When the action is deletefavorites', () => {
        const userMock2: UserI = {
            name: 'pepe',
            password: '12345',
            id: '2',
            email: '@gmail.com',
            imageProfile: 'url',
            purchasedProducts: [
                {
                    product: {
                        id: '2',
                        name: 'pepe',
                        image: '',
                        brand: '',
                        category: '',
                        date: '',
                        description: '',
                        price: 0,
                        stock: 5,
                    },
                    amount: 2,
                    isBuy: true,
                },
                {
                    product: {
                        id: '2',
                        name: 'pepe',
                        image: '',
                        brand: '',
                        category: '',
                        date: '',
                        description: '',
                        price: 0,
                        stock: 5,
                    },
                    amount: 2,
                    isBuy: true,
                },
            ],
            favorites: [{ id: '5' } as ProductI, { id: '2' } as ProductI],
            cart: [
                {
                    amount: 1,
                    isBuy: false,
                    product: {
                        id: '2',
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
        test('Then the returned state should be the original state', () => {
            action = {
                type: actionTypesUser.favoritesDelete,
                payload: { id: '5' },
            };
            state = {
                user: userMock2,
                token: 'token',
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result.user?.favorites).toEqual([{ id: '2' }]);
        });
    });
    describe('When the action is deleteaccount', () => {
        test('Then the returned state should be the original state', () => {
            action = {
                type: actionTypesUser.deleteAccount,
                payload: {
                    user: null,
                    token: null,
                    isLogged: false,
                    isLogging: false,
                },
            };
            state = {
                user: null,
                token: null,
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result.user).toEqual(null);
        });
        test('Then the returned state should be the original state', () => {
            action = {
                type: '',
                payload: {
                    user: null,
                    token: null,
                    isLogged: false,
                    isLogging: false,
                },
            };
            state = {
                user: null,
                token: null,
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result.user).toEqual(null);
        });
    });
    describe('When the action is buyCart', () => {
        test('Then the returned state should be the original state', () => {
            action = {
                type: '',
                payload: {
                    user: userMock,
                    token: 'token',
                    isLogged: false,
                    isLogging: false,
                },
            };
            state = {
                user: null,
                token: null,
                isLogged: false,
                isLogging: false,
            };

            const result = userReducer(state, action);
            expect(result.user).toEqual(null);
        });
    });
});
