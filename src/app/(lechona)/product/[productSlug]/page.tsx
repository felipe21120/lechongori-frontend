export const revalidate = 604800

import { notFound } from 'next/navigation';

import { titleFont } from '@/config/fonts';
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector } from '@/components';
import { getProductBySlug } from '@/actions';
import { AddProducts } from '@/components/ui/model/ui/AddProducts';

interface Props {
  params: {
    productSlug: string;
  };
}



export default async function ProductBySlugPage ( { params }: Props ) {

  const { productSlug } = params;
  const product = await getProductBySlug(productSlug)


  if ( !product ) {
    notFound();
  }



  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      <div className="col-span-1 md:col-span-2 ">
        

        <ProductMobileSlideshow 
          title={ product.productTitle }
          productImage={ product.ProductImage }
          className="block md:hidden"
        />

        <ProductSlideshow 
          title={ product.productTitle }
          productImage={ product.ProductImage }
          className="hidden md:block"
        />

        
      </div>


      <div className="col-span-1 px-5">

        <h1 className={ ` ${ titleFont.className } antialiased font-bold text-xl` }>
          { product.productTitle }
        </h1>
        <p className="text-sm mt-2">Precio: ${ product.productPrice }</p>

        <AddProducts product={product}/>

        

      </div>

    </div>
  );
}