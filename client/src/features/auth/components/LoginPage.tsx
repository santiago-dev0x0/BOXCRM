// 'use client';

// import { useForm, Controller, type SubmitHandler } from 'react-hook-form';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { Link } from 'react-router';
// import { MessageSquareDot, ArrowLeft } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// import {
//   Field,
//   FieldLabel,
//   FieldError,
//   FieldGroup,
// } from '@/components/ui/field';
// import { Input } from '@/components/ui/input';
// import happyHuman from '@/assets/login-image.svg';

// // Schema simplificado para Login
// const loginSchema = z.object({
//   email: z
//     .string()
//     .min(1, { message: 'El correo electrónico es obligatorio' })
//     .email('Email inválido'),
//   password: z.string().min(1, { message: 'La contraseña es obligatoria' }), // En login a veces no se valida minLength por seguridad, pero puedes poner .min(6)
// });

// type LoginFormData = z.infer<typeof loginSchema>;
// export function LoginPage() {
//   const form = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: '',
//       password: '',
//     },
//   });

//   const onSubmit: SubmitHandler<LoginFormData> = (data) => {
//     // TODO: Implementar lógica de login
//     console.log('Datos del formulario:', data);
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden font-sans">
//       {/* Fondo Mesh Gradient (Idéntico a RegisterPage) */}
//       <div className="absolute inset-0 bg-[#1a103c]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//           radial-gradient(at 12% 15%, hsla(215, 90%, 75%, 1) 0px, transparent 50%),
//           radial-gradient(at 25% 50%, hsla(300, 85%, 65%, 1) 0px, transparent 50%),
//           radial-gradient(at 80% 90%, hsla(190, 80%, 60%, 1) 0px, transparent 50%),
//           radial-gradient(at 80% 10%, hsla(260, 60%, 50%, 1) 0px, transparent 50%),
//           radial-gradient(at 0% 100%, hsla(265, 80%, 40%, 1) 0px, transparent 50%)
//         `,
//           }}
//         />
//         <div
//           className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay"
//           style={{ filter: 'url(#noiseFilter)' }}
//         />
//       </div>

//       <svg className="invisible absolute size-0">
//         <filter id="noiseFilter">
//           <feTurbulence
//             type="fractalNoise"
//             baseFrequency="0.8"
//             numOctaves="3"
//             stitchTiles="stitch"
//           />
//         </filter>
//       </svg>

//       {/* Contenedor principal */}
//       <div className="relative z-10 flex min-h-screen items-center justify-center p-4 lg:justify-start lg:px-8 lg:py-12">
//         {/* Tarjeta blanca con formulario */}
//         <div className="relative z-20 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
//           {/* Logo BoxCRM Centrado (Según tu screenshot de Login) */}
//           <div className="mb-6 flex flex-col items-center justify-center gap-2">
//             <div className="flex items-center gap-2">
//               <div className="text-blue-600">
//                 <MessageSquareDot className="h-10 w-10" />
//               </div>
//               <h1 className="text-3xl font-extrabold text-slate-900">
//                 Box<span className="text-blue-600">CRM</span>
//               </h1>
//             </div>
//           </div>

//           {/* Título y subtítulo */}
//           <div className="mb-8 text-center">
//             <h2 className="text-foreground mb-2 text-2xl font-bold">
//               Iniciar sesión
//             </h2>
//             <p className="text-muted-foreground text-sm">
//               Accede a tu cuenta de BoxCRM
//             </p>
//           </div>

//           {/* Formulario */}
//           <form onSubmit={form.handleSubmit(onSubmit)}>
//             <FieldGroup>
//               {/* Campo Email */}
//               <Controller
//                 name="email"
//                 control={form.control}
//                 render={({ field, fieldState }) => (
//                   <Field data-invalid={fieldState.invalid}>
//                     <FieldLabel htmlFor="login-email">
//                       Correo Electrónico
//                     </FieldLabel>
//                     <Input
//                       {...field}
//                       id="login-email"
//                       type="email"
//                       aria-invalid={fieldState.invalid}
//                       data-invalid={fieldState.invalid}
//                       placeholder="example@gmail.com"
//                     />
//                     {fieldState.invalid && (
//                       <FieldError errors={[fieldState.error]} />
//                     )}
//                   </Field>
//                 )}
//               />

//               {/* Campo Password */}
//               <Controller
//                 name="password"
//                 control={form.control}
//                 render={({ field, fieldState }) => (
//                   <Field data-invalid={fieldState.invalid}>
//                     <FieldLabel htmlFor="login-password">Contraseña</FieldLabel>
//                     <Input
//                       {...field}
//                       id="login-password"
//                       type="password"
//                       aria-invalid={fieldState.invalid}
//                       data-invalid={fieldState.invalid}
//                       placeholder="••••••••••"
//                     />
//                     {fieldState.invalid && (
//                       <FieldError errors={[fieldState.error]} />
//                     )}
//                   </Field>
//                 )}
//               />

//               {/* Botón Iniciar Sesión */}
//               <div className="pt-2">
//                 <Button
//                   type="submit"
//                   className="w-full rounded-md shadow-lg shadow-blue-600/20"
//                   disabled={form.formState.isSubmitting}
//                 >
//                   {form.formState.isSubmitting ? (
//                     <>Iniciando...</>
//                   ) : (
//                     'Iniciar sesión'
//                   )}
//                 </Button>
//               </div>
//             </FieldGroup>
//           </form>

//           {/* Link a Registro */}
//           <div className="text-muted-foreground mt-6 text-center text-sm">
//             ¿No tienes cuenta?{' '}
//             <Link
//               to="/register"
//               className="text-primary font-medium underline-offset-4 hover:underline"
//             >
//               Registrarse
//             </Link>
//           </div>

//           {/* Link Volver al inicio */}
//           <div className="mt-6 text-center">
//             <Link
//               to="/"
//               className="text-muted-foreground hover:text-foreground flex items-center justify-center gap-2 text-sm transition-colors"
//             >
//               <ArrowLeft className="h-4 w-4" />
//               Volver al inicio
//             </Link>
//           </div>
//         </div>

//         {/* Personaje 3D (Mantenemos la consistencia con el registro) */}
//         <div className="pointer-events-none absolute right-100 bottom-0 hidden lg:block">
//           <img
//             src={happyHuman}
//             alt="Personaje animado"
//             className="h-[700px] w-auto object-contain drop-shadow-2xl"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router';
import { MessageSquareDot, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import happyHuman from '@/assets/login-image.svg';

import { useAuthStore } from '@/store/authStore';

//TODO cambiar a variable de entorno
const BASE_URL = 'http://127.0.0.1:8000';

// ✅ Schema actualizado: ahora es "username", no "email"
const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'El nombre de usuario es obligatorio' }),
  password: z.string().min(1, { message: 'La contraseña es obligatoria' }),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginResponse {
  user: {
    id: number;
    username: string;
    email: string;
  };
  token: string;
}

export function LoginPage() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  // const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
  //   setSubmitError(null);
  //   try {
  //     const response = await fetch(`${BASE_URL}/auth/login/`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username: data.username, // ✅ ahora coincide 1:1 con el backend
  //         password: data.password,
  //       }),
  //     });

  //     const responseData: LoginResponse | { error?: string; message?: string } =
  //       await response.json();

  //     if (!response.ok) {
  //       const errorMsg =
  //         (responseData as { message?: string }).message ||
  //         (responseData as { error?: string }).error ||
  //         'Usuario o contraseña incorrectos.';
  //       setSubmitError(errorMsg);
  //       return;
  //     }

  //     // Guardar en localStorage
  //     const { token, user } = responseData as LoginResponse;
  //     localStorage.setItem('authToken', token);
  //     localStorage.setItem('user', JSON.stringify(user));

  //     navigate('/'); // o tu ruta protegida
  //   } catch (err) {
  //     console.error('Error de red:', err);
  //     setSubmitError(
  //       'No se pudo conectar con el servidor. Verifica tu conexión.'
  //     );
  //   }
  // };

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setSubmitError(null);
    try {
      const response = await fetch(`${BASE_URL}/auth/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      const responseData: LoginResponse | { error?: string; message?: string } =
        await response.json();

      if (!response.ok) {
        const errorMsg =
          (responseData as { message?: string }).message ||
          (responseData as { error?: string }).error ||
          'Usuario o contraseña incorrectos.';
        setSubmitError(errorMsg);
        return;
      }

      const { token, user } = responseData as LoginResponse;

      // ✅ Guardar en el store de Zustand (persistirá automáticamente)
      const { login } = useAuthStore.getState();
      login(user, token);

      navigate('/dashboard'); // o tu ruta protegida
    } catch (err) {
      console.error('Error de red:', err);
      setSubmitError(
        'No se pudo conectar con el servidor. Verifica tu conexión.'
      );
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      {/* Fondo Mesh Gradient (sin cambios) */}
      <div className="absolute inset-0 bg-[#1a103c]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
          radial-gradient(at 12% 15%, hsla(215, 90%, 75%, 1) 0px, transparent 50%),
          radial-gradient(at 25% 50%, hsla(300, 85%, 65%, 1) 0px, transparent 50%),
          radial-gradient(at 80% 90%, hsla(190, 80%, 60%, 1) 0px, transparent 50%),
          radial-gradient(at 80% 10%, hsla(260, 60%, 50%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(265, 80%, 40%, 1) 0px, transparent 50%)
        `,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay"
          style={{ filter: 'url(#noiseFilter)' }}
        />
      </div>

      <svg className="invisible absolute size-0">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
      </svg>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 lg:justify-start lg:px-8 lg:py-12">
        <div className="relative z-20 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
          <div className="mb-6 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <div className="text-blue-600">
                <MessageSquareDot className="h-10 w-10" />
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900">
                Box<span className="text-blue-600">CRM</span>
              </h1>
            </div>
          </div>

          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-2 text-2xl font-bold">
              Iniciar sesión
            </h2>
            <p className="text-muted-foreground text-sm">
              Accede a tu cuenta de BoxCRM
            </p>
          </div>

          {/* Mostrar error global */}
          {submitError && (
            <div className="mb-4 text-center text-sm text-red-500">
              {submitError}
            </div>
          )}

          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* ✅ Campo "Nombre de usuario" */}
              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="login-username">
                      Nombre de usuario
                    </FieldLabel>
                    <Input
                      {...field}
                      id="login-username"
                      type="text"
                      aria-invalid={fieldState.invalid}
                      data-invalid={fieldState.invalid}
                      placeholder="username"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Contraseña */}
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="login-password">Contraseña</FieldLabel>
                    <Input
                      {...field}
                      id="login-password"
                      type="password"
                      aria-invalid={fieldState.invalid}
                      data-invalid={fieldState.invalid}
                      placeholder="••••••••••"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full rounded-md shadow-lg shadow-blue-600/20"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>Iniciando...</>
                  ) : (
                    'Iniciar sesión'
                  )}
                </Button>
              </div>
            </FieldGroup>
          </form>

          <div className="text-muted-foreground mt-6 text-center text-sm">
            ¿No tienes cuenta?{' '}
            <Link
              to="/register"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              Registrarse
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground flex items-center justify-center gap-2 text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </div>
        </div>

        <div className="pointer-events-none absolute right-100 bottom-0 hidden lg:block">
          <img
            src={happyHuman}
            alt="Personaje animado"
            className="h-[700px] w-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
