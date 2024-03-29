import { id } from './repository-interface';
import {
    protoUser,
    userCart,
    UserI,
    UserIObject,
    UserToken,
} from '../types/types';

export class ServiceUsers {
    url: string;
    constructor() {
        this.url =
            'https://retro-gaming-back.onrender.com/users';
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
    register(user: Partial<protoUser>): Promise<UserIObject> {
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
            method: 'DELETE',
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
    patch(data: Partial<protoUser>): Promise<UserI> {
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
    deleteFavorites(data: string): Promise<id> {
        return fetch(`${this.url}/deletefavorites`, {
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
    deletePurchasedProducts(): Promise<id> {
        return fetch(`${this.url}/deletePurchasedProducts`, {
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
    updateCart(data: userCart): Promise<UserI> {
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
        return fetch(`${this.url}/buycart`, {
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
