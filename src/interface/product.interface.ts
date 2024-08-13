export interface Product {
    productDescription: string;
    productImages: string[];
    productSlug: string;
    productTitle: string;
    productPrice: number;
    productType: ValidTypes;
}

export type ValidTypes = 'lechona'|'tamal'|'empanadas'|'carne'|'sancocho'|'costillas';
 