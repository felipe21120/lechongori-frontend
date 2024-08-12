import { titleFont } from '@/config/fonts'
import Image from 'next/image'
import { IconComponent } from '../icons/Icons'

export const Footer = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row items-center md:items-start md:justify-between p-6 md:p-12'>
                <div className='md:w-1/3 lg:w-1/4 mb-8 md:mb-0 flex justify-center md:justify-start'>
                    <Image
                        src="/images/lechongori.jpg"
                        alt='Logo'
                        width={200}
                        height={200}
                        className='object-contain'
                    />
                </div>

                <div className="md:w-2/3 lg:w-3/4 flex flex-col md:flex-row justify-between lg:justify-end md:space-x-12 lg:space-x-20">
                    <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
                        <h3 className='font-extrabold text-md md:text-lg mb-2'>Productos</h3>
                        <div className='flex flex-col font-light text-gray-500 space-y-2'>
                            <span className='transition-all hover:text-gray-800 cursor-pointer text-sm md:text-base'>Tamal</span>
                            <span className='transition-all hover:text-gray-800 cursor-pointer text-sm md:text-base'>Lechona</span>
                            <span className='transition-all hover:text-gray-800 cursor-pointer text-sm md:text-base'>Carne</span>
                            <span className='transition-all hover:text-gray-800 cursor-pointer text-sm md:text-base'>Empanada</span>
                            <span className='transition-all hover:text-gray-800 cursor-pointer text-sm md:text-base'>Sancocho</span>
                            <span className='transition-all hover:text-gray-800 cursor-pointer text-sm md:text-base'>Costillas a la BBQ</span>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
                        <h3 className='font-extrabold text-md md:text-lg mb-2'>Contacto</h3>
                        <div className='flex flex-col font-light text-gray-500 space-y-2'>
                            <span className='transition-all hover:text-gray-800 cursor-pointer text-sm md:text-base'>315 7527103 - 3187473554</span>
                            <span className='transition-all hover:text-gray-800 cursor-pointer text-sm md:text-base'>Manzana 1 Casa 12 Jordan 8 etapa</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full border-t-2 border-gray-300'></div>

            <div className='p-6 md:p-12 flex flex-col md:flex-row justify-between items-center'>
                <h3 className={`${titleFont.className} text-xs md:text-sm font-light text-center md:text-left`}>
                    copyright © 2024 Lechongori |
                    <span className='text-red-500'> Diseño Prada Y Heiler</span>
                </h3>
                <div className="flex mt-4 md:mt-0 space-x-4">
                    <IconComponent iconName='facebook' altText="Facebook" width={30} height={30} />
                    <IconComponent iconName="whatsapp" altText="WhatsApp" width={30} height={30} />
                    <IconComponent iconName="instagram" altText="Instagram" width={30} height={30} />
                </div>
            </div>
        </>
    )
}
