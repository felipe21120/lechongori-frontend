import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

export const Inventory = () => {
    const productsInCart = initialData.products || []; 

    console.log(productsInCart)

    return (
        <div className="w-full px-10 mt-20">
            <div className="grid grid-cols-3 gap-8 text-center w-full h-full">
                {productsInCart.map((product, index) => {
                    if (!product || !product.productTitle || !product.productImage || product.productImage.length === 0) {
                        return (
                            <div key={index} className="mb-5">
                                <div className="flex flex-col items-center">
                                    <div className="w-80 h-80 bg-gray-200 flex items-center justify-center rounded-3xl mb-3">
                                        <p className="text-gray-500">No Image</p>
                                    </div>
                                    <div className="text-center mb-3">
                                        <p className="font-bold text-xl">Product Unavailable</p>
                                    </div>
                                    <div className="w-1/3">
                                        <p className="font-light text-sm">Precio: N/A</p>
                                        <p className="font-light text-sm">Cantidad: N/A</p>
                                    </div>
                                    <div className="w-1/3 mt-3">
                                        <button className="w-full py-2 px-4 bg-red-500 rounded-3xl text-white text-sm whitespace-nowrap">
                                            Añadir items
                                        </button>
                                    </div>s
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div key={product.productSlug} className="mb-5">
                            <div className="flex flex-col items-center">
                                <Image
                                    src={`/images/${product.productImage[0]}`}
                                    width={300}
                                    height={300}
                                    layout="fixed"
                                    objectFit="cover"
                                    alt={product.productTitle}
                                    className="mb-3 rounded-3xl"
                                />
                                <div className="text-center mb-3">
                                    <Link href="/admin/editar-inventario">
                                        <p className="font-bold text-xl">{product.productTitle}</p>
                                    </Link>
                                </div>
                                <div className="w-1/3">
                                    <p className="font-light text-sm">Precio: ${product.productPrice}</p>
                                    <p className="font-light text-sm">Cantidad: 5</p>
                                </div>
                                <div className="w-1/3 mt-3">
                                    <button className="w-full py-2 px-4 bg-red-500 rounded-3xl text-white text-sm whitespace-nowrap">
                                        Añadir items
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
