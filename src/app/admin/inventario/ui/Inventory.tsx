import { QuantitySelector } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";

export const Inventory = () => {

    const productsInCart = [
        initialData.products[0],
        initialData.products[1],
        initialData.products[2],
        initialData.products[3],

    ];


    return (
        <div className="w-full px-10 mt-20">
            <div className="grid grid-cols-6 gap-8 text-center w-full h-full">
                {/* Items */}
                {productsInCart.map(product => (
                    <div key={product.slug} className="mb-5">
                        <div className="flex flex-col items-center">
                            <Image
                                src={`/images/${product.images[0]}`}
                                width={200}
                                height={200}
                                layout="fixed"
                                objectFit="cover"
                                alt={product.title}
                                className="mb-3 rounded-3xl"
                            />
    
                            <div className="text-center">
                                <p className="font-semibold">{product.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="font-semibold text-lg col-span-2 bg-gray-100 h-[70vh] flex items-center justify-center">
                    <h1 className="text-red-500">PAGINA NO TERMINADA</h1>
                </div>
            </div>
        </div>
    );
    
}
