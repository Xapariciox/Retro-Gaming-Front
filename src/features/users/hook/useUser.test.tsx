import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
    mockStore,
    productMock,
    UserCartMock,
    userMock,
} from '../../../infrastructure/mockStore/mockStore';
import { mockStore2 } from '../../../infrastructure/mockStore/mockStore2';
import { ProductI } from '../../products/types/products';
import { ServiceUsers } from '../service/service-user';
import { protoUser, userCart, UserI } from '../types/types';
import { useUser } from './useUser';

describe('Given useUser', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let result: {
        current: {
            user: {
                user: UserI | null;
                token: string | null;
                isLogged: boolean;
                isLogging: boolean;
            };
            handleLogin: (user: protoUser) => void;
            handleAddFavorites: (data: ProductI) => void;
            handleDeleteFavorites: (data: ProductI) => void;
            handleDeleteAccount: () => void;
            handleAddCart: (data: userCart) => void;
            handleDeleteCart: (data: userCart) => void;
            handleUpdateCart: (data: userCart) => void;
        };
    };
    beforeEach(() => {
        ServiceUsers.prototype.register = jest.fn().mockResolvedValue(userMock);
        ServiceUsers.prototype.login = jest
            .fn()
            .mockResolvedValue({ userMock, token: 'token' });
        ServiceUsers.prototype.addfavorites = jest
            .fn()
            .mockResolvedValue({ userMock });

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={mockStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useUser(), { wrapper }));
    });

    describe('when it has been run handleLogin and it has called handleLogin', () => {
        test('then should return a Promise of user', () => {
            result.current.handleLogin({
                name: userMock.name,
                password: userMock.password,
            });

            expect(ServiceUsers.prototype.login).toHaveBeenCalled;
        });
    });
    test('then should return a Promise of user', () => {
        ServiceUsers.prototype.login = jest
            .fn()
            .mockResolvedValue({ userMock });
        result.current.handleLogin({
            name: userMock.name,
            password: userMock.password,
        });

        expect(ServiceUsers.prototype.login).toHaveBeenCalled;
    });
    describe('when it has been run handleLogin and it has called handleAddFavorites', () => {
        beforeEach(() => {
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockStore2}>{children}</Provider>
            );

            ({ result } = renderHook(() => useUser(), { wrapper }));
        });
        test('then should return a error', () => {
            ServiceUsers.prototype.addfavorites = jest
                .fn()
                .mockResolvedValue({ userMock });
            result.current.handleAddFavorites(productMock);

            expect(ServiceUsers.prototype.addfavorites).toHaveBeenCalled;
        });
        test('then should return a Promise of user favorites Updated', () => {
            ServiceUsers.prototype.addfavorites = jest
                .fn()
                .mockResolvedValue({ userMock });
            expect(() =>
                result.current.handleAddFavorites({} as ProductI)
            ).toThrow();
        });
    });
    describe('when it has been run handleLogin and it has called handleAddCart', () => {
        beforeEach(() => {
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockStore2}>{children}</Provider>
            );

            ({ result } = renderHook(() => useUser(), { wrapper }));
        });
        test('then should return a error', () => {
            ServiceUsers.prototype.addCart = jest
                .fn()
                .mockResolvedValue({ userMock });
            result.current.handleAddCart(UserCartMock);

            expect(ServiceUsers.prototype.addCart).toHaveBeenCalled;
        });
        test('then should return a Promise of user Cart Updated', () => {
            ServiceUsers.prototype.addCart = jest
                .fn()
                .mockResolvedValue({ userMock });
            expect(() => result.current.handleAddCart({} as userCart));
        });
    });
    describe('when it has been run handleLogin and it has called handleAddCart', () => {
        beforeEach(() => {
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockStore2}>{children}</Provider>
            );

            ({ result } = renderHook(() => useUser(), { wrapper }));
        });
        test('then should return a error', () => {
            ServiceUsers.prototype.addCart = jest
                .fn()
                .mockResolvedValue({ userMock });
            result.current.handleAddCart(UserCartMock);

            expect(ServiceUsers.prototype.addCart).toHaveBeenCalled;
        });
        test('then should return a Promise of user Cart Updated', () => {
            ServiceUsers.prototype.addCart = jest
                .fn()
                .mockResolvedValue({ userMock });
            expect(() => result.current.handleAddCart({} as userCart));
        });
    });
    describe('when it has been run handleLogin and it has called handleUpdateCart', () => {
        beforeEach(() => {
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockStore2}>{children}</Provider>
            );

            ({ result } = renderHook(() => useUser(), { wrapper }));
        });
        test('then should return a error', () => {
            ServiceUsers.prototype.updateCart = jest
                .fn()
                .mockResolvedValue({ userMock });
            result.current.handleUpdateCart(UserCartMock);

            expect(ServiceUsers.prototype.updateCart).toHaveBeenCalled;
        });
        test('then should return a Promise of user Cart Updated', () => {
            ServiceUsers.prototype.updateCart = jest
                .fn()
                .mockResolvedValue({ userMock });
            expect(() => result.current.handleUpdateCart({} as userCart));
        });
    });
    describe('when it has been run handleLogin and it has called handleDeletefavorites', () => {
        beforeEach(() => {
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockStore2}>{children}</Provider>
            );

            ({ result } = renderHook(() => useUser(), { wrapper }));
        });
        test('then should return a error', () => {
            ServiceUsers.prototype.deleteFavorites = jest
                .fn()
                .mockResolvedValue({ userMock });
            result.current.handleDeleteFavorites(productMock);

            expect(ServiceUsers.prototype.addfavorites).toHaveBeenCalled;
        });
        test('then should return a Promise of user favorites Updated', () => {
            ServiceUsers.prototype.deleteFavorites = jest
                .fn()
                .mockResolvedValue({ userMock });
            expect(() =>
                result.current.handleDeleteFavorites({} as ProductI)
            ).toThrow();
        });
    });
    describe('when it has been run handleLogin and it has called handleDeleteCart', () => {
        beforeEach(() => {
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockStore2}>{children}</Provider>
            );

            ({ result } = renderHook(() => useUser(), { wrapper }));
        });
        test('then should return a Promise of user cart Updated', () => {
            ServiceUsers.prototype.deleteCart = jest
                .fn()
                .mockResolvedValue({ userMock });
            expect(() =>
                result.current.handleDeleteCart({} as userCart)
            ).toThrow();
        });
    });
    describe('when it has been run handleLogin and it has called handleDeleteAccount', () => {
        beforeEach(() => {
            const wrapper = ({ children }: { children: JSX.Element }) => (
                <Provider store={mockStore2}>{children}</Provider>
            );

            ({ result } = renderHook(() => useUser(), { wrapper }));
        });

        test('then should return user', () => {
            ServiceUsers.prototype.deleteAccount = jest
                .fn()
                .mockResolvedValue({});
            result.current.handleDeleteAccount();
            expect(ServiceUsers.prototype.deleteAccount).toHaveBeenCalled();
        });
    });
});
