'use client'

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  userEmail: string;
  userPassword: string;
};

export const FormBox: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError, reset } = useForm<Inputs>({
    defaultValues: {
      userEmail: "",
      userPassword: ""
    }
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(`${apiUrl}/usuario/servicio-usuario`, {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: data.userEmail,
          userPassword: data.userPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al iniciar sesión");
      }

      const successData = await response.json();
      alert(successData.success);
      console.log(successData)
      reset();

    } catch (error: any) {
      alert(error.message);
      setError("root", { message: error.message });
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="m b-4">
        <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="username">
          Correo electrónico
        </label>
        <input
          type="text"
          {...register("userEmail", {
            required: {
              value: true,
              message: "Correo invalido"
            }
          })}
          className="shadow appearance-none border border-gray-500 rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Escribe tu correo de administrador"
        />
        <p className="font-light text-sm text-red-500">{errors.userEmail?.message}</p>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="password">
          Contraseña
        </label>
        <input
          type="password"
          {...register("userPassword", {
            required: {
              value: true,
              message: "Contraseña invalida"
            }
          })}
          className="shadow appearance-none border border-gray-500 rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline"
          placeholder="**********"
        />
        <p className="font-light text-sm text-red-500">{errors.userPassword?.message}</p>
      </div>

      {errors.root && <p className="font-light text-sm text-red-500">{errors.root.message}</p>}

      <div className="flex items-center justify-center py-10">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-10 rounded-3xl focus:outline-none focus:shadow-outline"
        >
          {isSubmitting ? "Enviando..." : "Iniciar Sesión"}
        </button>
      </div>
    </form>
  );
};
