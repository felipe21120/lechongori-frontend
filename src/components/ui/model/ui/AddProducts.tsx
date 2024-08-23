'use client'

import { SizeSelector } from '@/components/product/size-selector/SizeSelector'
import type { CartProduct, Product, Size } from '@/interface'
import { useCartStore } from '@/store';
import React, { useState } from 'react'
import { QuantitySelector } from '@/components/product/quanquity-selector/QuantitySelector';
import { QuantitySelectorInput } from '@/components/product/quanquity-selector/QuantitySelectorInput';


interface Props {
  product: Product | null; 
}

export const AddProducts: React.FC<Props> = ({ product }) => {
  if (!product) {
    return <div>No hay productos</div>; 
  }

  const addProductToCart = useCartStore(state => state.addProductTocart);


  const [sizes, setSizes] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {

    setPosted(true);

    if (!sizes) return;

    const cartProduct: CartProduct = {
      id: product.id,
      productSlug: product.productSlug,
      productTitle: product.productTitle,
      productPrice: product.productPrice,
      productQuantity: quantity,
      sizes: sizes,
      productImage: product.ProductImage[0]
    }


    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
    setSizes(undefined);


  }



  return (
    <>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10">
    {posted && !sizes && (
      <span className="mt-2 text-red-500 fade-in col-span-2">
        Debe de seleccionar un producto para hacer una cotización
      </span>
    )}


    <SizeSelector
      selectedSize={sizes}
      availableSizes={product.sizes}
      onSizeChanged={setSizes}
    />


    <QuantitySelectorInput
      quantity={quantity}
      onQuantityChanged={setQuantity}
    />
  </div>

  {/* Descripción */ }
      <h3 className="font-semibold mb-4">Descripción</h3>
        <p className="font-light text-sm text-gray-700">
          { product.productDescription }
        </p>


  <div className="flex justify-center items-center mt-16">
    <button
      onClick={addToCart}
      className="flex bg-red-500 py-2 px-10 rounded-3xl text-white transition-transform transform hover:scale-105 focus:scale-95"
    >
      Agregar al carrito
    </button>
  </div>
</>

  )
}
