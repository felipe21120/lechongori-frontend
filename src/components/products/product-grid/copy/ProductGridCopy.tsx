import { Product } from "@/interface";
import { ProductGridItemCopy } from "./ProductGridItemCopy";




interface Props {
  products: Product[];
}

export const ProductGridCopy = ({ products }: Props) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

      {
        products.map( product => (
          <ProductGridItemCopy
            key={ product.productSlug }
            product={ product }
          />
        ) )
      }
      </div>
    </div>
  );
};
