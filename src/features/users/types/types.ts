import { ProductI } from '../../products/types/products';
export type productsInCart = {
    name?: string;
    image?: string;
    date?: string;
    description?: string;
    stock?: number;
    brand?: string;
    price?: number;
    category?: string;
    id: ProductI;
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
    purchasedProducts: Array<userCart>;
    favorites: Array<ProductI>;
    cart: Array<userCart>;
};
export type UserToken = {
    user: UserI;
    token: string;
};
export type userCart = {
    isBuy: boolean;
    product: ProductI;
    amount: number;
};
export type UserIObject = {
    user: UserI;
};
