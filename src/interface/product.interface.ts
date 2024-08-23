
export interface Product {
  id: string
  productDescription: string;
  ProductImage: string[];
  productSlug: string;
  productTitle: string;
  productPrice: number;
}




export interface CartProduct {
  id: string
  productSlug: string;
  productTitle: string;
  productPrice: number;
  productQuantity: number;
  productImage: string;
}



export type ValidTypes = 'lechona'|'tamal'|'tamal_lechona'|'carne'|'sancocho'|'costillas';
