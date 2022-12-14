import { ProductI } from '../types/products';
import { ServiceProducts } from './repository-product';

describe('Given the instance of Product Service', () => {
    let service: ServiceProducts;
    let mockdata: ProductI;
    beforeEach(() => {
        service = new ServiceProducts();
        mockdata = {
            id: '63906feea47e41ae1b23a0b2',
            name: 'pepe',
            image: 'url',
            date: '2022',
            description: 'prueba',
            stock: 10,
            brand: 'gucci',
            price: 20,
            category: 'prueba',
        };
    });

    describe('when we use get all', () => {
        test('Then if all are bad, it should return a error()', async () => {
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue([]),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test('Then if all are OK, it should return a Promise of an Array of produts()', async () => {
            const response = {
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).rejects;
        });
        test(`Then if there are problems, it should throw an error`, async () => {
            const response = {
                ok: false,
                status: 500,
                statusText: 'Server Error',
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            await expect(async () => await service.getAll()).rejects.toThrow();
        });
    });
    describe('when we use get', () => {
        test('Then if all are OK, it should return a Promise of product()', async () => {
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue({}),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.get(mockdata.id as string);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
        test(`Then if there are problems, it should throw an error`, async () => {
            const response = {
                ok: false,
                status: 500,
                statusText: 'Server Error',
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            await expect(async () => await service.get(2)).rejects.toThrow();
        });
    });
    describe('when we use find', () => {
        test('Then if all are OK, it should return a Promise of product()', async () => {
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue([]),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.find('name', 'pepe');
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then if there are problems, it should throw an error`, async () => {
            const response = {
                ok: false,
                status: 500,
                statusText: 'Server Error',
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            await expect(
                async () => await service.find('hola', 'ja')
            ).rejects.toThrow();
        });
    });
});
