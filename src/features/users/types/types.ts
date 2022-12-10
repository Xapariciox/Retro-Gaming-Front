import { ProductI } from '../../products/types/products';
export type productsInCart = {
    productId: string;
    amount: number;
    token: string;
    isBuy: boolean;
};
export type productsInFavorites = {
    token: string;
    productId: string;
};

export type protoUser = {
    name?: string;
    email?: string;
    imageProfile?: string;
    password?: string;
    purchasedProducts?: Array<product>;
    favorites?: Array<string>;
    cart?: Array<product>;
};
export type product = {
    product: string | ProductI;
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
    favorites: Array<string>;
    cart: Array<productsInCart>;
};
export type UserToken = {
    user: UserI;
    token: string;
};
