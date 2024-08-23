'use server';

import prisma from '@/lib/prisma';
import { Product } from '@/interface'; 

export const getProductBySlug = async (productSlug: string): Promise<Product | null> => {
  try {
    const product = await prisma.product.findFirst({
      include: {
        ProductImage: {
          select: {
            url: true
          }
        }
      },
      where: {
        productSlug: productSlug,
      }
    });

    if (!product) return null;

    return {
      ...product,
      ProductImage: product.ProductImage.map( image => image.url )
    };

  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener producto por slug');
  }
};
