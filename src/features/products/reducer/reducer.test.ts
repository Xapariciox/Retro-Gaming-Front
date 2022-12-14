import { ProductI } from '../types/products';
import { actionTypesProduct } from './action.types';
import { productReducer } from './reducer';

describe('Given the function productReducer', () => {
    const productMock: ProductI = {
        name: 'pepe',
        image: 'url',
        date: '22-20-2022',
        description: 'prueba',
        stock: 1,
        brand: 'prueba',
        price: 2,
        category: 'console',
    };

    let action: { type: string; payload: unknown };
    let state: Array<ProductI>;

    describe('When the action is load', () => {
        beforeEach(() => {
            action = {
                type: actionTypesProduct.load,
                payload: [productMock],
            };
            state = [];
        });
        test('Then the returned state should be the action payload', () => {
            const result = productReducer(state, action);
            expect(result).toEqual(action.payload);
        });
    });
    describe('When the action is  other', () => {
        beforeEach(() => {
            action = {
                type: '',
                payload: null,
            };
            state = [productMock];
        });
        test('Then the returned state should be', () => {
            const result = productReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
