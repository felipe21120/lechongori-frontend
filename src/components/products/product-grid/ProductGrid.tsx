import { Product } from "@/interface";
import { ProductGridItem } from "./ProductGridItem";
import { titleFont } from "@/config/fonts";
import { SubTitle } from "@/components/ui/title/SubTitle";

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
      <h1 className={ `${titleFont.className} font-bold text-center text-3xl pb-2`}>Cotizacion</h1>
      <SubTitle 
        subtitle='Selecciona un producto que deseas cotizar'
        classname='text-center text-sm text-gray-700'
      />


      {
        products.map( product => (
          <ProductGridItem
            key={ product.productSlug }
            product={ product }
          />
        ) )
      }
      </div>
    </div>
  );
};
