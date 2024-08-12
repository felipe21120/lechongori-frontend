import { IconComponent, ImageLogo, SubTitle, Title } from '@/components'
import React from 'react'
import { OptionsForm } from './OptionsForm'
import Link from 'next/link'

export const DateForm = () => {
    return (
        <section className='mt-10'>
            <Title
                title='Cotización'
                className='text-4xl font-bold pb-6 text-center'
            />
            <SubTitle
                subtitle='Proporciónanos tus datos para brindarte una cotización personalizada de nuestros productos.'
                classname='font-light pb-8 text-gray-800 text-center'
            />
            <div className="flex items-center justify-center ">
                <div className="relative bg-white px-10 rounded-3xl shadow-2xl w-full max-w-3xl">
                    <Link href="/">
                        <IconComponent
                            iconName='close'
                            altText="Close"
                            width={30}
                            height={30}
                            classname="absolute top-6 right-6 cursor-pointer"
                        />
                    </Link>
                    
                    <ImageLogo
                        width={200}
                        height={200}
                        classname='h-60'
                    />

                    <OptionsForm />

                </div>
            </div>
        </section>

    )
}
