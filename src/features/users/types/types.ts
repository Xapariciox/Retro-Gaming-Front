import { ProductI } from '../../products/types/products';

export type protoUser = {
    name?: string;
    email?: string;
    imageProfile?: string;
    password?: string;
    purchasedProducts?: Array<MyProducts>;
    favorites?: Array<string>;
    cart?: Array<MyProducts>;
};
export type MyProducts = {
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
    purchasedProducts: Array<MyProducts>;
    favorites: Array<string>;
    cart: Array<MyProducts>;
};
