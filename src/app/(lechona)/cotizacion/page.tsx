
import { specialTitle } from '@/config/fonts';
import { getProductBySlug } from '@/actions';
import { Metadata, ResolvingMetadata } from 'next';
import { SubTitle, Title } from '@/components';
import { CotizacionSummary } from '@/components/ui/model/ui/CotizacionSummary';
import { ProductCotizacion } from '@/components/ui/model/ui/ProductCotizacion';


interface Props {
  params: {
    productSlug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  const productSlug = params.productSlug;

  
  const product = await getProductBySlug(productSlug);

  return {
    title: product?.productTitle ?? "Producto no encontrado",
    description: product?.productDescription ?? "",
    openGraph: {
      title: product?.productTitle ?? "Producto no encontrado",
      description: product?.productDescription ?? "",
      images: [`/images/${product?.ProductImage[1]}`],
    },
  };
}


export default async function CotizacionPage({ params }: Props) {

  const { productSlug } = params;
  const product = await getProductBySlug(productSlug)

  console.log(product)
  


  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col w-full max-w-6xl">


        <Title
          title='Cotización'
          className={`${specialTitle.className} font-bold text-3xl text-center sm:text-left`}
        />
        <SubTitle 
          subtitle='Selecciona los productos que te interesan para cotizar. Si necesitas más información, no dudes en contactarnos para recibir tu cotización personalizada'
          classname='text-sm mt-4 text-gray-500 font-light'
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 mt-8">


          <div className="flex flex-col">
            <SubTitle
              subtitle='Productos seleccionados'
              classname="mb-5 text-center sm:text-left text-sm"
            />
            <ProductCotizacion />
          </div>


          <div className="bg-white rounded-xl shadow-2xl p-5 sm:p-7 h-fit w-full">
            <h2 className="text-lg font-semibold mb-5 text-center sm:text-left">
              Resumen de la cotización
            </h2>

            <CotizacionSummary />
          </div>
        </div>


        

      </div>
    </div>

  );
};
