import Link from "next/link";




export const FormBox: React.FC = () => {
    return (
        <form >
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="username">
                    Correo electrónico
                </label>
                <input
                    type="text"
                    id="username"
                    className="shadow appearance-none border border-gray-500 rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Escribe tu correo de administrador"
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="password">
                    Contraseña
                </label>
                <input
                    type="password"
                    id="password"
                    className="shadow appearance-none border border-gray-500 rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="**********"
                />
            </div>
            <div className="flex items-center justify-center py-10">

                <Link href="/admin/historial">
                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-10 rounded-3xl focus:outline-none focus:shadow-outline"
                    >
                        Iniciar Sesión
                    </button>
                </Link>


            </div>
        </form>
    );
}

