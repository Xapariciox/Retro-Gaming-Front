import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ServiceUsers } from '../service/service-user';
import { protoUser } from '../types/types';
import * as ac from '../reducer/action.creator';

export const useUser = () => {
    const user = useSelector((state: rootState) => state.user);

    const dispatcher = useDispatch();
    const repositoryUser = useMemo(() => new ServiceUsers(), []);

    const handleLogin = (user: protoUser) => {
        repositoryUser
            .login(user)
            .then((response) => dispatcher(ac.loginFinish(response)));
    };
    const handleAddFavorites = (data: string) => {
        repositoryUser.addfavorites(data).then(() => {
            dispatcher(ac.addFavorites(data));
        });
    };
    const handleDeleteFavorites = (data: string) => {
        repositoryUser.deleteFavorites(data).then(() => {
            dispatcher(ac.favoritesDelete(data));
        });
    };
    const handleDeleteAccount = () => {
        repositoryUser.deleteAccount().then(() => {
            dispatcher(ac.deleteAccount());
        });
    };
    return {
        user,
        handleLogin,
        handleAddFavorites,
        handleDeleteFavorites,
        handleDeleteAccount,
    };
};
