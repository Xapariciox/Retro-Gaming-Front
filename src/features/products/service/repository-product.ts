import { id } from '../../users/service/repository-interface';
import { ProductI } from '../types/products';
import { RepositoryProducts } from './repository-interface';

export class ServiceProducts implements RepositoryProducts {
    url: string;
    constructor(
        url = 'https://retro-gaming-back.onrender.com/products'
    ) {
        this.url = url;
    }

    getAll(): Promise<Array<ProductI>> {
        return fetch(`${this.url}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response
                .json()
                .then((product) => product.Products)
                .catch((error: Error) => {
                    return error;
                });
        });
    }
    get(id: id): Promise<ProductI> {
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
    find(category: string, value: string): Promise<Array<ProductI>> {
        return fetch(`${this.url}/${category}/${value}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.json().catch((error: Error) => {
                return error;
            });
        });
    }
}
