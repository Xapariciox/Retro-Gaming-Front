import { protoUser, UserI } from '../types/types';

export type id = string | number;
export interface RepositoryUsers {
    login: (user: Partial<protoUser>) => Promise<string>;
    register: (user: Partial<protoUser>) => Promise<UserI>;
    deleteAccount: (idUser: id) => Promise<id>;
    get: (item: Partial<UserI>) => Promise<UserI>;
    patch: (id: id, data: Partial<UserI>) => Promise<UserI>;
    addfavorites: (idUser: id, data: Partial<UserI>) => Promise<UserI>;
    deleteFavorites: (idUser: id, data: Partial<UserI>) => Promise<UserI>;
    addCart: (idUser: id, data: Partial<UserI>) => Promise<UserI>;
    updateCart: (idUser: id, data: Partial<UserI>) => Promise<UserI>;
    BuyCart: (idUser: id, data: Partial<UserI>) => Promise<UserI>;
}
