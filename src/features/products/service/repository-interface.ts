import { UserI } from '../../users/types/types';
import { ProductI } from '../types/products';

export interface RepositoryProducts {
    getAll: () => Promise<Array<ProductI>>;
    get: (item: Partial<UserI>) => Promise<ProductI>;
    find: (category: string, value: string) => Promise<Array<ProductI>>;
}
