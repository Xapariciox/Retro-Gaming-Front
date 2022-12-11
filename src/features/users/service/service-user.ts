import { id } from './repository-interface';
import { protoUser, UserI, UserToken } from '../types/types';

export class ServiceUsers {
    url: string;
    constructor() {
        this.url = 'http://localhost:7700/users';
    }
    login(user: Partial<protoUser>): Promise<UserToken> {
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
    deleteAccount(): Promise<id> {
        return fetch(`${this.url}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
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
    patch(data: Partial<UserI>): Promise<UserI> {
        return fetch(`${this.url}/updateuser`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    addfavorites(data: string): Promise<UserI> {
        console.log(data);
        return fetch(`${this.url}/addfavorites`, {
            method: 'PATCH',
            body: JSON.stringify({
                id: data,
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    deleteFavorites(data: Partial<UserI>): Promise<id> {
        return fetch(`${this.url}/deletefavorites`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    addCart(data: Partial<UserI>): Promise<UserI> {
        return fetch(`${this.url}/addcart`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    deleteCart(data: Partial<UserI>): Promise<id> {
        return fetch(`${this.url}/deletecart`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    updateCart(data: Partial<UserI>): Promise<UserI> {
        return fetch(`${this.url}/updatecart`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
    buyCart(): Promise<UserI> {
        return fetch(`${this.url}/deletecart`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
}
