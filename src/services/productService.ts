import { Product } from '@/interface';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/product/read-products`);

    if (!response.ok) {
      throw new Error(`Error al obtener los productos: ${response.status}`);
    }

    const data: Product[] = await response.json();
    console.log("Productos obtenidos :)")
    return data;
  } catch (error) {
    console.error("ocurrio un problema o algo asi", error);
    throw new Error("no se pudo obtener la lista");
  }
};


