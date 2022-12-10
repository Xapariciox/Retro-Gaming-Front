import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../../infrastructure/store/store';
import { ServiceUsers } from '../service/service-user';
import { protoUser, UserI } from '../types/types';
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
    // const handleAddFavorites = (data: UserI) => {
    //     repositoryUser
    //         .addfavorites(data.id)
    //         .then((response) => dispatcher(ac.addFavorites(response as any)));
    // };

    return {
        user,
        handleLogin,
        // handleAddFavorites,
    };
};
