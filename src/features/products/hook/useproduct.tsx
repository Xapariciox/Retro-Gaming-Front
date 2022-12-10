import { rootState } from '../../../infrastructure/store/store';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceProducts } from '../service/repository-product';
import * as ac from '../reducer/action.creator';

export const useProduct = () => {
    const products = useSelector((state: rootState) => state.products);
    const dispatcher = useDispatch();
    const repositoryProduct = useMemo(() => new ServiceProducts(), []);

    useEffect(() => {
        repositoryProduct
            .getAll()
            .then((products) => dispatcher(ac.loadProducts(products)));
    }, [repositoryProduct, dispatcher]);

    return {
        products,
    };
};
