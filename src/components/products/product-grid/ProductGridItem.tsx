


import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interface';

interface Props {
  product: Product;
}


export const ProductGridItem = ( { product }: Props ) => {



  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={ `/images/${ product.slug }` }>
        <Image
          src={ `/images/${ product.images[0] }` }
          alt={ product.title }
          className="w-full object-cover rounded"
          width={ 500 }
          height={ 500 }
        />
      </Link>

      
    </div>
  );
};