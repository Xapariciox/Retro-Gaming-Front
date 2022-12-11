export type id = string | number;
export interface RepositoryUsers<T> {
    login: (user: Partial<T>) => Promise<T>;
    register: (user: Partial<T>) => Promise<T>;
    deleteAccount: (token: string) => Promise<id>;
    get: (id: id) => Promise<T>;
    patch: (data: Partial<T>) => Promise<T>;
    addfavorites: (data: Partial<T>) => Promise<T>;
    deleteFavorites: (data: Partial<T>) => Promise<id>;
    addCart: (data: Partial<T>) => Promise<T>;
    deleteCart: (data: Partial<T>) => Promise<id>;
    updateCart: (data: Partial<T>) => Promise<T>;
    buyCart: () => Promise<T>;
}
