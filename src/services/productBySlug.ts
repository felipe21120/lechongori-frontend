
import { Product } from '@/interface';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchProductBySlug = async (slug: string): Promise<Product> => {
  try {
    const response = await fetch(`${API_URL}/product/${slug}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product", error);
    throw new Error("Failed to fetch product");
  }
};