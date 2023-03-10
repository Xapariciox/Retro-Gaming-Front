import { userCart, UserI } from '../types/types';
import { ServiceUsers } from './service-user';

describe('Given the instance of Product Service', () => {
    let service: ServiceUsers;
    let mockdata: UserI;
    beforeEach(() => {
        service = new ServiceUsers();
        mockdata = {
            id: '58585',
            name: 'Roberto',
            email: 'email',
            password: 'llamado',
            imageProfile: 'ss',
            cart: [],
            favorites: [],
            purchasedProducts: [],
        };
    });

    describe('when we use get', () => {
        test('Then if all are OK, it should return a Promise of product()', async () => {
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue([]),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.get(mockdata.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
    });

    describe('when we use patch', () => {
        // test('Then if all are OK, it should return a Promise of user()', async () => {
        //     const response = {
        //         ok: true,
        //         json: jest.fn().mockRejectedValue({}),
        //     };
        //     global.fetch = jest.fn().mockResolvedValue(response);
        //     const result = await service.patch(mockdata);
        //     expect(fetch).toHaveBeenCalled();
        //     expect(result).toEqual({});
        // });
    });
    describe('when we use addFavorites', () => {
        test('Then if all are OK, it should return a Promise of user()', async () => {
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue({}),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.addfavorites(mockdata.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
    });
    describe('when we use deleteFavorites', () => {
        test('Then if all are OK, it should return a Promise of user()', async () => {
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue({}),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.deleteFavorites(mockdata.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
    });
    describe('when we use addCart', () => {
        test('Then if all are OK, it should return a Promise of user()', async () => {
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue({}),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.addCart(mockdata);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
    });
    describe('when we use deleteCart', () => {
        test('Then if all are OK, it should return a Promise of id()', async () => {
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue({}),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.deleteCart(mockdata);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
    });
    describe('when we use updateCart', () => {
        test('Then if all are OK, it should return a Promise of user()', async () => {
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue({}),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.updateCart(
                mockdata as unknown as userCart
            );
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
    });
    describe('when we use buyCart', () => {
        test('Then if all are OK, it should return a Promise of user()', async () => {
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue({}),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.buyCart();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
    });
    describe('when we use Login', () => {
        test('Then if all are OK, it should return a Promise of user()', async () => {
            const mockUser = {
                email: 'pr@gmail.com',
                password: '12345',
            };
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue({}),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.login(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
    });
    describe('when we use Register', () => {
        test('Then if all are OK, it should return a Promise of user()', async () => {
            const mockUser = {
                email: 'pr@gmail.com',
                password: '12345',
            };
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue({}),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.register(mockUser);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
    });
    describe('when we use deleteAccount', () => {
        test('Then if all are OK, it should return a Promise of user()', async () => {
            const response = {
                ok: true,
                json: jest.fn().mockRejectedValue({}),
            };
            global.fetch = jest.fn().mockResolvedValue(response);
            const result = await service.deleteAccount();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
    });
});
