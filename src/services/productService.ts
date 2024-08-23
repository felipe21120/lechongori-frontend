import { Product } from '@/interface';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_URL}/product/read-products`);

    if (!response.ok) {
      throw new Error(`Error al obtener los productos: ${response.status}`);
    }

    const data = await response.json();
    console.log("Productos obtenidos :)", data.objectResponse); 

    return data.objectResponse; 
  } catch (error) {
    console.error("Ocurrió un problema", error);
    throw new Error("No se pudo obtener la lista");
  }
};
