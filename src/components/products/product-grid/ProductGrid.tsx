import { Product } from "@/interface";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
    products: Product[]
}

export const ProductGrid = ({ products}:Props) => {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductGridItem key={product.slug} product={product} />
        ))}
      </div>
    </div>
      );
}