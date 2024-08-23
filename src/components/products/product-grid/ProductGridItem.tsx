import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interface';
import { titleFont } from '@/config/fonts';


interface Props {
  product: Product;
}


export const ProductGridItem = ({ product }: Props) => {



  return (
    <>
  <Link href={`/product/${product.productSlug}`}>
    <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-xl mb-4 cursor-pointer transform transition-transform duration-300 hover:scale-105">
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
        <h2 className={`${titleFont.className} font-bold text-xl mb-5`}>
          {product.productTitle}
        </h2>

        <span className="text-gray-700 font-light mb-4">
          {product.productDescription}
        </span>
        <span className="font-semibold mt-2">Precio: ${product.productPrice}</span>
      </div>
    </div>
  </Link>
</>

  );
};