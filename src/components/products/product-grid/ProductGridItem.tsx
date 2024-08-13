import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interface';

interface Props {
  product: Product;
}


export const ProductGridItem = ( { product }: Props ) => {



  return (
    <div className="rounded-md overflow-hidden fade-in mx-2">
      <Link href={ `/images/${ product.slug }` }>
        <Image
          src={ `/images/${ product.images[0] }` }
          alt={ product.title }
          className="w-full object-cover rounded"
          layout="responsive"
          width={400}
          height={400}
          quality={100}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-blue-600"
          href={ `/product/${ product.slug }` }>
          { product.title }
        </Link>
        <span className="font-bold">{ product.description }</span>
      </div>

      
    </div>
  );
};