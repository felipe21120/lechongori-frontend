'use client'


import type { CartProduct, Product, Size } from '@/interface'
import { useCartStore } from '@/store';
import React, { useState } from 'react'
import { QuantitySelectorInput } from '@/components/product/quanquity-selector/QuantitySelectorInput';
import Link from 'next/link';


interface Props {
  product: Product | null;
}

export const AddProducts: React.FC<Props> = ({ product }) => {
  if (!product) {
    return <div>No hay productos</div>;
  }

  const addProductToCart = useCartStore(state => state.addProductTocart);


  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {

    setPosted(true);

    const cartProduct: CartProduct = {
      id: product.id,
      productSlug: product.productSlug,
      productTitle: product.productTitle,
      productPrice: product.productPrice,
      productQuantity: quantity,
      productImage: product.ProductImage[0]
    }


    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);

  }

  return (
    <>


      <div className="grid grid-cols-1 my-10">

        <QuantitySelectorInput
          quantity={quantity}
          onQuantityChanged={setQuantity}
        />
      </div>

      <h3 className="font-semibold mb-4">Descripción</h3>
      <p className="font-light text-sm text-gray-700">
        {product.productDescription}
      </p>


      <div className="flex justify-center items-center mt-16">
        <Link href="/pre-cotizacion">
          <button
            onClick={addToCart}
            className="flex bg-red-500 py-2 px-10 rounded-3xl text-white transition-transform transform hover:scale-105 focus:scale-95"
          >
            Agregar cotización
          </button>
        </Link>

      </div>

      <div className="flex justify-center items-end mt-4">
  <Link href="/pre-cotizacion">
    <p className="underline text-sm transition duration-300 ease-in-out transform hover:text-red-500 hover:scale-105">
      Volver al inicio
    </p>
  </Link>
</div>

    </>

  )
}
