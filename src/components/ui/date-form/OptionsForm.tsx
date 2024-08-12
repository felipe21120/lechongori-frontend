import React from 'react'
import { SubTitle } from '../title/SubTitle'

export const OptionsForm = () => {
    return (
        <form >
            <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="first-name">
                        Nombres
                    </label>
                    <input
                        type="text"
                        id="first-name"
                        className="shadow appearance-none border border-gray-500 rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Escribe tu nombre"
                    />
                </div>

                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="last-name">
                        Apellidos
                    </label>
                    <input
                        type="text"
                        id="last-name"
                        className="shadow appearance-none border border-gray-500 rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Escribe tu apellido"
                    />
                </div>
            </div>


            <div className="mb-6 flex space-x-4">
                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="email">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="shadow appearance-none border border-gray-500 rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Escribe tu correo electrónico"
                    />
                </div>

                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="phone">
                        Número
                    </label>
                    <input
                        type="text"
                        id="phone"
                        className="shadow appearance-none border border-gray-500 rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Número"
                    />
                </div>
            </div>




            <SubTitle
                subtitle='Te enviaremos un pdf con toda la información a tu correo electronico'
                classname='text-center font-light text-sm pt-2'
            />


            <div className="flex items-center justify-center py-10">
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-10 rounded-3xl focus:outline-none focus:shadow-outline"
                >
                    Pedir cotización
                </button>
            </div>
        </form>
    )
}
