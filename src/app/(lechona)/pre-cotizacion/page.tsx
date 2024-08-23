import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";



export default async function PreCotizacionPage() {

    const {products}  = await getPaginatedProductsWithImages();


    return (
        <div>
            <ProductGrid products={products}/>
        </div>
    );
}