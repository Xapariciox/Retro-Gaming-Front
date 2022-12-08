import { id } from '../../users/service/repository-interface';
import { ProductI } from '../types/products';

export interface RepositoryProducts {
    getAll: () => Promise<Array<ProductI>>;
    get: (id: id) => Promise<ProductI>;
    find: (category: string, value: string) => Promise<Array<ProductI>>;
}
