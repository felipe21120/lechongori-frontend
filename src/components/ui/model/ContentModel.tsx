import Link from 'next/link';
import Image from 'next/image';
import { initialData } from '@/seed/seed';
import { Title } from '../title/Title';
import { specialTitle } from '@/config/fonts';
import { QuantitySelector } from '@/components/product/quanquity-selector/QuantitySelector';
import { ProductSelector } from './input/inputModel';
import { QuantityInput } from './input/QuanquityModel';
import { SubTitle } from '../title/SubTitle';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];



export const ContentModel: React.FC = () => {

    const handleProductSelect = (product: string) => {
        console.log('Producto seleccionado:', product);
      };

      const handleQuantityChange = (quantity: number) => {
        console.log('Cantidad seleccionada:', quantity);
      };



  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col">

        <Title 
          title='Cotización'
          className={`${specialTitle.className} font-bold text-2xl`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">

        
          <div className="flex flex-col mt-5">
          <SubTitle 
            subtitle='Productos seleccionados'
            classname='mb-5 text-sm'
          />

            
            {productsInCart.map(product => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/images/${product.images[0]}`}
                  width={100}
                  height={100}
                  layout="fixed"
                  objectFit="cover"
                  alt={product.title}
                  className="mr-5 rounded"
                />

                <div className="flex flex-col justify-between items-start w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className='py-2 pr-8'>
                      <p>{product.title}</p>
                      <p>${product.price}</p>
                    </div>
                    <QuantitySelector quantity={3} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-7 h-fit">
            <h2 className="text-lg font-semibold mb-5">Resumen de la cotización</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3</span>
              
              <span>Subtotal</span>
              <span className="text-right">$ 20.000</span>
              
              <span className="mt-5 text-xl">Total:</span>
              <span className="my-5 text-xl text-right">$ 20.000</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <Link 
                className="flex bg-red-500 p-2 rounded-xl text-white justify-center"
                href="/auth/date-form"
              >
                Cotizar
              </Link>
            </div>
          </div>
            
            <div >
                <ProductSelector options={['Lechona', 'Tamal', 'Carne']} onSelect={handleProductSelect} 
                  title='Selecciona un producto'
                  subtitle='Selecciona un producto que desea cotizar'
                
                
                />
            </div>
            <div>
                <QuantityInput onQuantityChange={handleQuantityChange} 
                  title='Cantidad'
                  subtitle='selecciona la cantidad que deseas cotizar'
                
                />
            </div>



        </div>
      </div>
    </div>
  );
};
