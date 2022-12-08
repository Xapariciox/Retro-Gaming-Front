import { id, RepositoryUsers } from './repository-interface';
import { protoUser, UserI } from '../types/types';

export class ServiceUsers implements RepositoryUsers {
    url: string;
    constructor() {
        this.url = 'http://localhost:7700/users';
    }
    login(user: Partial<protoUser>): Promise<string> {
        return fetch(`${this.url}/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                return response.json();
            })
            .catch((error: Error) => {
                return error;
            });
    }
    register(user: Partial<protoUser>): Promise<UserI> {
        return fetch(`${this.url}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .catch((error: Error) => {
                return error;
            });
    }
    deleteAccount(token: string): Promise<id> {
        return fetch(`${this.url}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .catch((error: Error) => {
                return error;
            });
    }
    get(id: id): Promise<UserI> {
        return fetch(`${this.url}/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    patch(data: Partial<UserI>, token: string): Promise<UserI> {
        return fetch(`${this.url}/updateuser`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    addfavorites(data: Partial<UserI>, token: string): Promise<UserI> {
        return fetch(`${this.url}/addfavorites`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    deleteFavorites(data: Partial<UserI>, token: string): Promise<id> {
        return fetch(`${this.url}/deletefavorites`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    addCart(data: Partial<UserI>, token: string): Promise<UserI> {
        return fetch(`${this.url}/addcart`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    deleteCart(data: Partial<UserI>, token: string): Promise<id> {
        return fetch(`${this.url}/deletecart`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    updateCart(data: Partial<UserI>, token: string): Promise<UserI> {
        return fetch(`${this.url}/updatecart`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    buyCart(token: string): Promise<UserI> {
        return fetch(`${this.url}/deletecart`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
}
