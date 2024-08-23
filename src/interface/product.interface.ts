
export interface Product {
  id: string
  productDescription: string;
  ProductImage: string[];
  productSlug: string;
  productTitle: string;
  productPrice: number;
  sizes: Size[];
}


export type Size = 'lechona' | 'tamal' | 'tamal_lechona' | 'carne' | 'sancocho' | 'costillas'




export interface CartProduct {
  id: string
  productSlug: string;
  productTitle: string;
  productPrice: number;
  productQuantity: number;
  sizes: Size;
  productImage: string;
}



export type ValidTypes = 'lechona'|'tamal'|'tamal_lechona'|'carne'|'sancocho'|'costillas';
