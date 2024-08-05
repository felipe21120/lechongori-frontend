import { ImageLogo, SubTitle, Title } from "@/components";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { initialData } from "@/seed/seed";


const products = initialData.products


export default function Home() {
  return (
    <div>

      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 p-2 ml-40">
          <Title
            title="Bienvenido a lechongori"
            subtitle="En Lechongori, te invitamos a deleitarte con los sabores auténticos de Tolima. Somos un emprendimiento dedicado a llevar a tu mesa la mejor comida típica de la región, elaborada con ingredientes frescos y recetas tradicionales. Nuestro menú incluye deliciosos platos como el tamal tolimense, la clásica lechona, la jugosa carne a llanera, empanadas de lechona irresistibles y un reconfortante sancocho."
            className="mb-2"
          />
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <ImageLogo />
        </div>

      </div>
      <SubTitle />

      <div>

      </div>
      <Title
        title="Conoce algunos de nuestros productos"
        className="text-xl text-center"
      />

      <ProductGrid 
      products={products}
      />


    </div>


  );
}
