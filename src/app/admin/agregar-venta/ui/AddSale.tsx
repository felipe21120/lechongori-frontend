'use client'

import { QuantitySelector, SubTitle, Title } from '@/components';
import { ProductSelector } from '@/components/ui/model/input/inputModel';
import { QuantityInput } from '@/components/ui/model/input/QuanquityModel';
import { specialTitle } from '@/config/fonts';
import { initialData } from '@/seed/seed';
import Image from 'next/image';
import Link from 'next/link';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const AddSale: React.FC = () => {
  const handleProductSelect = (product: string) => {
    console.log('Producto seleccionado:', product);
  };

  const handleQuantityChange = (quantity: number) => {
    console.log('Cantidad seleccionada:', quantity);
  };

  return (
    <div className="flex justify-center items-center h-auto sm:h-[70vh] p-4 sm:p-5 md:p-6 lg:p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-3xl md:max-w-4xl">

        <Title 
          title='Agregar una venta'
          className={`${specialTitle.className} font-bold text-xl sm:text-2xl md:text-3xl text-center`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-10">


          <div className="flex flex-col">
            <SubTitle 
              subtitle='Productos seleccionados'
              classname='mb-4 text-sm md:text-base'
            />


            {productsInCart.map(product => (
              <div key={product.productSlug} className="flex mb-4 md:mb-6">
                <Image
                  src={`/images/${product.productImage[0]}`}
                  width={60}
                  height={60}
                  layout="fixed"
                  objectFit="cover"
                  alt={product.productTitle}
                  className="mr-3 md:mr-4 rounded"
                />

                <div className="flex flex-col justify-between items-start w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className='py-1 pr-2 md:pr-4'>
                      <p className="text-sm md:text-base">{product.productTitle}</p>
                      <p className="text-sm md:text-base">${product.productPrice}</p>
                    </div>
                    <QuantitySelector quantity={3} onQuantityChanged={console.log}/>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 h-fit">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">Resumen de la Venta</h2>

            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <span className="text-sm md:text-base">No. Productos</span>
              <span className="text-right text-sm md:text-base">3</span>

              <span className="text-sm md:text-base">Subtotal</span>
              <span className="text-right text-sm md:text-base">$ 20.000</span>

              <span className="mt-4 text-lg md:text-xl">Total:</span>
              <span className="my-3 text-lg md:text-xl text-right">$ 20.000</span>
            </div>

            <div className="mt-4 mb-2 w-full">
              <Link 
                className="flex bg-red-500 p-2 rounded-xl text-white justify-center text-sm md:text-base"
                href="/auth/date-form"
              >
                Agregar venta
              </Link>
            </div>
          </div>


          <div>
            <ProductSelector 
              options={['Lechona', 'Tamal', 'Carne']} 
              onSelect={handleProductSelect} 
              title='Selecciona un producto'
              subtitle='Selecciona un producto que desea agregar al historial de ventas'
            />
          </div>

          <div>
            <QuantityInput 
              onQuantityChange={handleQuantityChange} 
              title='Cantidad'
              subtitle='Selecciona la cantidad que desea agregar al historial de ventas'
            />
          </div>

        </div>
      </div>
    </div>
  );
}
