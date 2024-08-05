export interface Product {
    description: string;
    images: string[];
    slug: string;
    title: string;
    price: number;
    type: ValidTypes;
}

export type ValidTypes = 'lechona'|'tamal'|'empanadas'|'carne'|'sancocho'|'costillas';
