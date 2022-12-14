import { ProductI } from '../../products/types/products';
export type productsInCart = {
    id: string;
    amount: number;
    token: string;
    isBuy: boolean;
};
export type productsInFavorites = {
    token: string;
    id: string;
};

export type protoUser = {
    name?: string;
    email?: string;
    imageProfile?: string;
    password?: string;
    purchasedProducts?: Array<product>;
    favorites?: Array<string>;
    cart?: Array<productsInCart>;
};
export type product = {
    id: string | ProductI;
    amount: number;
    isBuy: boolean;
};
export type UserI = {
    id: string;
    name: string;
    email: string;
    imageProfile: string;
    password: string;
    purchasedProducts: Array<product>;
    favorites: Array<ProductI>;
    cart: Array<productsInCart>;
};
export type UserToken = {
    user: UserI;
    token: string;
};
