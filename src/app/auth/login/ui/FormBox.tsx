'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  userEmail: z
    .string()
    .email("Por favor, ingresa un correo electrónico válido."),
  userPassword: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres.")
});

type Inputs = z.infer<typeof schema>

export const FormBox: React.FC = () => {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors, isSubmitting }, setError, reset } = useForm<Inputs>({
    defaultValues: {
      userEmail: "",
      userPassword: ""
    },
    resolver: zodResolver(schema)
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
      reset();
      router.push('/admin/home');  

    } catch (error: any) {
      alert(error.message);
      setError("root", { message: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className={`block text-sm font-light mb-2 ${errors.userEmail ? 'text-red-500' : 'text-gray-700'}`} htmlFor="userEmail">
          Correo electrónico
        </label>
        <input
          type="text"
          {...register("userEmail")}
          className={`peer shadow appearance-none border rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline ${errors.userEmail ? 'border-red-500 placeholder-red-500' : 'border-gray-500 placeholder-gray-500'}`}
          placeholder="Escribe tu correo de administrador"
        />
        <p className="font-light text-sm text-red-500">{errors.userEmail?.message}</p>
      </div>

      <div className="mb-6">
        <label className={`block text-sm font-light mb-2 ${errors.userPassword ? 'text-red-500' : 'text-gray-700'}`} htmlFor="userPassword">
          Contraseña
        </label>
        <input
          type="password"
          {...register("userPassword")}
          className={`peer shadow appearance-none border rounded-2xl w-full py-3 px-5 text-gray-700 placeholder:text-xs font-light leading-tight focus:outline-none focus:shadow-outline ${errors.userPassword ? 'border-red-500 placeholder-red-500' : 'border-gray-500 placeholder-gray-500'}`}
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
