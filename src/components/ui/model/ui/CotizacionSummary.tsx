'use client'

import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const CotizacionSummary = () => {

  const [loaded, setLoaded] = useState(false);

  const { itemsInCart, subTotal, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  useEffect(() => {
    setLoaded(true); 
  }, []);


  if (!loaded) return <p>Loading...</p>;

  return (
    <>
  <div className="grid grid-cols-2">
    <span>No. Productos</span>
    <span className="text-right">
      {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
    </span>

    <span>Subtotal</span>
    <span className="text-right">{currencyFormat(subTotal)}</span>

    <span className="mt-5 text-xl">Total:</span>
    <span className="my-5 text-xl text-right">{currencyFormat(total)}</span>
  </div>

  <div className="mt-5 mb-2 w-full mx-auto">
    <Link
      className="flex bg-red-500 p-2 rounded-xl text-white justify-center"
      href="/auth/date-form"
    >
      Cotizar
    </Link>
  </div>
</>

  );
};
