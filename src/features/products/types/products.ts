export type ProductI = {
    _id?: string;
    id: string;
    name: string;
    image: string;
    date: string;
    description: string;
    stock: number;
    brand: string;
    price: number;
    category: string;
};
export type ProtoProduct = {
    name?: string;
    image?: string;
    date?: string;
    description?: string;
    stock?: number;
    brand?: string;
    price?: number;
    category?: string;
};
