import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interface';
import { titleFont } from '@/config/fonts';


interface Props {
  product: Product;
}


export const ProductGridItemCopy = ( { product }: Props ) => {



  return (
    <>
      <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-xl mb-4">
      
      <div className="w-1/3 flex-shrink-0">
          <Image
            src={`/images/${product.ProductImage[0]}`}
            alt={product.productTitle}
            className="object-cover rounded"
            layout="responsive"
            width={150} 
            height={150} 
            quality={100}
          />
      </div>


      <div className="ml-6 flex flex-col w-2/3">
          <h2 className={ `${titleFont.className} font-bold text-xl mb-3`}>{product.productTitle}</h2>  
        <span className="text-gray-700 font-light mb-4 text-sm">{product.productDescription}</span>
        
      </div>
    </div>
    </>
    
  );
};