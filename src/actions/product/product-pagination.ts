"use server";

import prisma from "@/lib/prisma";


export const getPaginatedProductsWithImages = async () => {

  try {
    // 1. Obtener los productos
    const products = await prisma.product.findMany({
      include: {
        ProductImage: {
          take: 1,
          select: {
            url: true,
          },
        },
      },
      
    });

    
    

    return {
      products: products.map((product) => ({
        ...product,
        ProductImage: product.ProductImage.map( image => image.url)
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};