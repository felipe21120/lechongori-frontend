'use client'

import { QuantitySelector } from "@/components/product/quanquity-selector/QuantitySelector"
import { useCartStore } from "@/store"
import Image from "next/image"
import { useEffect, useState } from "react"

export const ProductCotizacion = () => {
  const updateProductQuantity = useCartStore(state => state.updateProductQuantity);
  const removeProduct = useCartStore(state => state.removeProduct);
  const [loaded, setLoaded] = useState(false);
  const productsInCart = useCartStore(state => state.cart);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Loading...</p>
  }


  return (
    <>
      {productsInCart.map(product => (
        <div
          key={`${product.productSlug}-${product.sizes}`}
          className="flex flex-col sm:flex-row mb-5 p-4 rounded-lg shadow-2xl w-full"
        >
          <div className="flex justify-center sm:justify-start mb-4 sm:mb-0">
            <Image
              src={`/images/${product.productImage}`} 
              width={100}
              height={100}
              layout="fixed"
              objectFit="cover"
              alt={product.productTitle}
              className="rounded"
            />
          </div>
          <div className="flex flex-col justify-between items-start w-full sm:ml-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full">
              <div className="py-2">
                <p className="text-sm sm:text-base font-semibold">{product.productTitle}</p>
              </div>
              <div className="flex justify-between items-center w-full sm:w-auto">
                <p className="pr-6 text-base sm:text-lg font-medium text-gray-700">
                  ${product.productPrice}
                </p>
                <QuantitySelector
                  quantity={product.productQuantity}
                  onQuantityChanged={productQuantity =>
                    updateProductQuantity(product, productQuantity)
                  }
                />
              </div>
            </div>
            <button
              onClick={() => removeProduct(product)}
              className="text-red-500 mt-2 sm:mt-0 self-start sm:self-auto"
            >
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
