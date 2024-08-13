'use client'; 

import { useEffect, useState } from 'react';


import { Product } from '@/interface';
import { fetchProducts } from '@/services/productService';
import { ProductGrid } from '../product-grid/ProductGrid';

const ProductGridContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        console.log(Array.isArray(data)); // Verifica si data es un arreglo
      console.log(data); // Muestra el contenido de data
      } catch (error) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return <ProductGrid products={products} />;
};

export default ProductGridContainer;
