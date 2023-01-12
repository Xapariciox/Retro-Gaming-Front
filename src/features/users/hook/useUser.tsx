import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ServiceUsers } from '../service/service-user';
import { protoUser, userCart } from '../types/types';
import * as ac from '../reducer/action.creator';
import { ProductI } from '../../products/types/products';

export const useUser = () => {
    const user = useSelector((state: rootState) => state.user);

    const dispatcher = useDispatch();
    const repositoryUser = useMemo(() => new ServiceUsers(), []);

    const handleLogin = (user: protoUser) => {
        repositoryUser.login(user).then((response) => {
            dispatcher(ac.loginFinish(response));
            if (response.token) localStorage.setItem('token', response.token);
        });
    };
    const handleAddFavorites = (data: ProductI) => {
        if (!data.id) {
            throw new Error();
        }
        repositoryUser.addfavorites(data.id);
        dispatcher(ac.addFavorites(data));
    };
    const handleDeleteFavorites = (data: ProductI) => {
        if (!data.id) {
            throw new Error();
        }
        repositoryUser.deleteFavorites(data.id);
        dispatcher(ac.favoritesDelete(data));
    };
    const handleDeleteAccount = () => {
        repositoryUser.deleteAccount();
        dispatcher(ac.deleteAccount());
    };
    const handleAddCart = (data: userCart) => {
        repositoryUser.addCart(data.product);
        dispatcher(ac.addCart(data));
    };
    const handleDeleteCart = (data: userCart) => {
        repositoryUser.deleteCart(data.product);
        dispatcher(ac.deleteCart(data));
    };
    const handleUpdateCart = (data: userCart) => {
        repositoryUser.updateCart(data);
        dispatcher(ac.editAmountCart(data));
    };
    const handleBuyCart = (data: userCart) => {
        repositoryUser.buyCart();
        dispatcher(ac.buyCart(data as unknown as userCart));
    };
    return {
        user,
        handleLogin,
        handleAddFavorites,
        handleDeleteFavorites,
        handleDeleteAccount,
        handleAddCart,
        handleDeleteCart,
        handleUpdateCart,
        handleBuyCart,
    };
};
