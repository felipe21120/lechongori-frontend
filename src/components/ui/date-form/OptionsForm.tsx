'use client';

import { SubTitle } from '../title/SubTitle';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';

const schema = z.object({
    firstName: z
        .string()
        .min(2, 'El nombre debe tener al menos 2 caracteres.')
        .max(50, 'El nombre no puede tener más de 50 caracteres.')
        .regex(/^[a-zA-Z\s]+$/, 'El nombre solo puede contener letras y espacios.'),
    lastName: z
        .string()
        .min(2, 'El apellido debe tener al menos 2 caracteres.')
        .max(50, 'El apellido no puede tener más de 50 caracteres.')
        .regex(/^[a-zA-Z\s]+$/, 'El apellido solo puede contener letras y espacios.'),
    email: z
        .string()
        .email('Por favor, ingresa un correo electrónico válido.')
        .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'El correo electrónico debe cumplir con el formato estándar.'),
    phone: z
        .string()
        .regex(/^\+?[1-9]\d{1,14}$/, 'Por favor, ingresa un número de teléfono válido.'),
});

type Inputs = z.infer<typeof schema>;

export const OptionsForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            const response = await fetch(`${apiUrl}/usuario/servicio-usuario`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error al enviar los datos');
            }

            const successData = await response.json();
            alert(successData.success);
            reset();
        } catch (error: any) {
            alert(error.message);
            setError('root', { message: error.message });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                    <label className={`block text-gray-700 text-sm font-light mb-2 ${errors.firstName ? 'text-red-500' : 'text-gray-700'}`} htmlFor="firstName">
                        Nombres
                    </label>
                    <input
                        type="text"
                        id="first-name"
                        {...register("firstName")}
                        className={`shadow appearance-none border ${errors.firstName ? 'border-red-500' : 'border-gray-500'} rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline`}
                        placeholder="Escribe tu nombre"
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>

                <div className="w-1/2">
                    <label className={`block text-gray-700 text-sm font-light mb-2 ${errors.lastName ? 'text-red-500' : 'text-gray-700'}`} htmlFor="lastName">
                        Apellidos
                    </label>
                    <input
                        type="text"
                        id="last-name"
                        {...register("lastName")}
                        className={`shadow appearance-none border ${errors.lastName ? 'border-red-500' : 'border-gray-500'} rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline`}
                        placeholder="Escribe tu apellido"
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
            </div>

            <div className="mb-6 flex space-x-4">
                <div className="w-1/2">
                    <label className={`block text-gray-700 text-sm font-light mb-2 ${errors.email ? 'text-red-500' : 'text-gray-700'}`} htmlFor="email">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register("email")}
                        className={`shadow appearance-none border ${errors.email ? 'border-red-500' : 'border-gray-500'} rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline`}
                        placeholder="Escribe tu correo electrónico"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="w-1/2">
                    <label className={`block text-gray-700 text-sm font-light mb-2 ${errors.phone ? 'text-red-500' : 'text-gray-700'}`} htmlFor="phone">
                        Número
                    </label>
                    <input
                        type="text"
                        id="phone"
                        {...register("phone")}
                        className={`shadow appearance-none border ${errors.phone ? 'border-red-500' : 'border-gray-500'} rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline`}
                        placeholder="Número"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
            </div>

            {errors.root && <p className="font-light text-sm text-red-500">{errors.root.message}</p>}

            <SubTitle
                subtitle='Te enviaremos un pdf con toda la información a tu correo electronico'
                classname='text-center font-light text-sm pt-2'
            />

            <div className="flex items-center justify-center py-10">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-10 rounded-3xl focus:outline-none focus:shadow-outline"
                >
                    {isSubmitting ? "Enviando..." : "Pedir Cotización"}
                </button>
            </div>
        </form>


    );
};
