import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../../../infrastructure/store/store';
import { ServiceProducts } from '../service/repository-product';
import { ProductI } from '../types/products';
import { useProduct } from './useproduct';

jest.mock('../service/repository-product');

const mockProduct1 = {
    name: 'Nintendo 3ds',
    image: 'urk',
    date: '2010',
    description: 'muy buena',
    stock: 20,
    brand: 'Nintendo',
    price: 100,
    category: 'Console',
};
describe('Given useProduct', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let result: {
        current: {
            products: Array<ProductI>;
        };
    };
    beforeEach(() => {
        ServiceProducts.prototype.getAll = jest
            .fn()
            .mockResolvedValue([mockProduct1]);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useProduct(), { wrapper }));
    });

    describe('when we get products', () => {
        test('then should return a Promise of products', async () => {
            await waitFor(() => {
                expect(mockProduct1).toBeTruthy();
            });
        });
    });
});
