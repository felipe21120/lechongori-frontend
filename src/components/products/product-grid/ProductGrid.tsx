'use client'

import { Product } from "@/interface";
import { ProductGridItem } from "./ProductGridItem";
import { titleFont } from "@/config/fonts";
import Link from "next/link";
import { useCartStore } from "@/store";

interface Props {
  products: Product[];
}



export const ProductGrid = ({ products }: Props) => {

  const { cart } = useCartStore();

  const isButtonDisabled = cart.length === 0;


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        <h1 className={`${titleFont.className} font-bold text-center text-3xl pb-2`}>Cotización</h1>
        <p className=" font-light text-sm text-center mb-2">
          Para poder recibir una cotización, primero debes seleccionar el producto o productos que deseas cotizar. Una vez que hayas hecho esto,
          <span className="block"> podrás solicitar tu cotización personalizada basada en los productos que has elegido</span>
        </p>

        <div className="flex flex-col items-center mb-4">
          <Link href="/cotizacion">
            <button
              disabled={isButtonDisabled}
              className={`bg-red-500 text-white font-light py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 hover:shadow-xl transition duration-300 ease-in-out transform ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
            >
              Ir al resumen de la cotización
            </button>
          </Link>
          {isButtonDisabled && (
            <p className="text-red-500 text-xs mt-3">
              El botón está deshabilitado porque no hay productos seleccionados.
              <span className="font-bold block text-center">Selecciona un producto</span>
            </p>
          )}
        </div>

        <h3 className={`${titleFont.className} text-center font-bold text-2xl mt-6`}>Productos</h3>

        {
          products.map(product => (
            <ProductGridItem
              key={product.productSlug}
              product={product}
            />
          ))
        }
      </div>
    </div>

  );
};
