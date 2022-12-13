import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
    mockStore,
    userMock,
} from '../../../infrastructure/mockStore/mockStore';
import { ProductI } from '../../products/types/products';
import { ServiceUsers } from '../service/service-user';
import { protoUser, UserI } from '../types/types';
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
    // test('then should return a Promise of user favorites Updated', () => {
    //     ServiceUsers.prototype.login = jest
    //         .fn()
    //         .mockResolvedValue({ userMock });
    //     result.current.handleAddFavorites(productMock);

    //     expect(ServiceUsers.prototype.addfavorites).toHaveBeenCalled;
    // });
    // test('then should return a error', () => {
    //     ServiceUsers.prototype.login = jest
    //         .fn()
    //         .mockResolvedValue({ userMock });
    //     result.current.handleAddFavorites(productMock);

    //     expect(ServiceUsers.prototype.addfavorites).toHaveBeenCalled;
    // });
});
