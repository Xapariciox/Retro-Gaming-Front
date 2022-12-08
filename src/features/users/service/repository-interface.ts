import { protoUser, UserI } from '../types/types';

export type id = string | number;
export interface RepositoryUsers {
    login: (user: Partial<protoUser>) => Promise<string>;
    register: (user: Partial<protoUser>) => Promise<UserI>;
    deleteAccount: (token: string) => Promise<id>;
    get: (id: id) => Promise<UserI>;
    patch: (data: Partial<UserI>, token: string) => Promise<UserI>;
    addfavorites: (data: Partial<UserI>, token: string) => Promise<UserI>;
    deleteFavorites: (data: Partial<UserI>, token: string) => Promise<id>;
    addCart: (data: Partial<UserI>, token: string) => Promise<UserI>;
    deleteCart: (data: Partial<UserI>, token: string) => Promise<id>;
    updateCart: (data: Partial<UserI>, token: string) => Promise<UserI>;
    buyCart: (token: string) => Promise<UserI>;
}
