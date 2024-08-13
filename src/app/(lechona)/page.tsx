// export const revalidate = 60


import { Carrousel, Footer, ImageLogo, ScrollWithWhatsApp, SubTitle, Title } from "@/components";
import ProductGridContainer from "@/components/products/product-grid-container/ProducGridContainer";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";

import { specialTitle } from "@/config/fonts";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <div className="mb-4 px-4 sm:px-6 lg:px-8">
        <Title
          title="Bienvenidos a lechongori"
          className="font-semibold text-center text-3xl text-red-500 mb-4"
        />
        <SubTitle
          subtitle="Desliza para conocer más"
          classname="font-light text-gray-700 text-sm text-center mb-8"
        />
        <Carrousel />
      </div>


      <div id="informacion-section" className="px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
          <div className="flex-1 p-4">
            <Title
              title="Bienvenido a lechongori"
              className="text-2xl md:text-3xl font-bold mt-16 md:mt-20 mb-12 md:mb-16"
            />
            <SubTitle
              subtitle="En Lechongori, te invitamos a deleitarte con los sabores auténticos de Tolima. Somos un emprendimiento dedicado a llevar a tu mesa la mejor comida típica de la región, elaborada con ingredientes frescos y recetas tradicionales. Nuestro menú incluye deliciosos platos como el tamal tolimense, la clásica lechona, la jugosa carne a llanera, empanadas de lechona irresistibles y un reconfortante sancocho."
              classname="text-justify font-light text-sm md:text-base"
            />
          </div>
          <div className="flex-1 flex justify-center md:justify-center">
            <ImageLogo
              width={320}
              height={320}
              classname="w-full max-w-xs md:max-w-md"
            />
          </div>
        </div>


        <SubTitle
          subtitle="Cada bocado es una celebración de la rica herencia culinaria de Tolima, preparado con amor y dedicación."
          subtitle2="¡Ven y disfruta de una experiencia gastronómica única en Lechongori!"
          classname={`${specialTitle.className} text-lg md:text-xl font-extrabold text-center mb-16 md:mb-28`}
        />
      </div>


      <div id="product-section" className="px-4 sm:px-6 lg:px-8">
        <Title
          title="Conoce algunos de nuestros productos"
          className="text-2xl md:text-3xl text-center font-bold mb-12 md:mb-16"
        />
        
        <ProductGridContainer />

        <SubTitle
          subtitle="Saber más sobre nuestros productos especiales"
          classname={`${specialTitle.className} text-xl md:text-2xl font-bold text-center text-red-500 mt-8 md:mt-10 mb-16 md:mb-28`}
        />
      </div>

      <Footer />

      <ScrollWithWhatsApp
        className="custom-class" 
        phoneNumber="573007277299" 
        message="Hola, como estas" 
      />
    </>
  );
}
