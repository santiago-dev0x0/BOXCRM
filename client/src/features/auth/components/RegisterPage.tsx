import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router';
import { MessageSquareDot, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import happyHuman from '@/assets/register-image.svg';

const registerSchema = z
  .object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    password: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    // TODO: Implementar lógica de registro
    console.log('Register data:', data);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Fondo con gradiente vertical inspirado en la imagen */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, 
              #87CEEB 0%, 
              #B19CD9 15%, 
              #DDA0DD 30%, 
              #FF69B4 45%, 
              #DA70D6 60%, 
              #9370DB 75%, 
              #00CED1 100%
            )
          `,
          backgroundSize: '100% 100%',
        }}
      >
        {/* Textura granular */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        {/* Ondas suaves para crear efecto de movimiento */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 20%, rgba(255, 105, 180, 0.4) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse 70% 50% at 20% 80%, rgba(0, 206, 209, 0.3) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 lg:justify-start lg:px-8 lg:py-12">
        {/* Tarjeta blanca con formulario */}
        <div className="relative z-20 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
          {/* Logo BoxCRM */}
          <div className="mb-6 flex items-center gap-2">
            <MessageSquareDot className="text-primary h-10 w-10" />
            <h1 className="text-2xl font-extrabold">
              Box<span className="text-primary">CRM</span>
            </h1>
          </div>

          {/* Título y subtítulo */}
          <div className="mb-8 text-center">
            <h2 className="text-foreground mb-2 text-2xl font-bold">
              Crear Cuenta
            </h2>
            <p className="text-muted-foreground text-sm">
              Comienza a gestionar tus conversaciones
            </p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Campo Nombre Completo */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-foreground text-sm font-medium"
              >
                Nombre Completo
              </label>
              <input
                id="name"
                type="text"
                placeholder="nombre completo"
                className={cn(
                  'border-input flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm transition-colors',
                  'placeholder:text-muted-foreground',
                  'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                  errors.name &&
                    'border-destructive focus-visible:ring-destructive'
                )}
                {...register('name')}
              />
              {errors.name && (
                <p className="text-destructive text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Campo Correo Electrónico */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-foreground text-sm font-medium"
              >
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className={cn(
                  'border-input flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm transition-colors',
                  'placeholder:text-muted-foreground',
                  'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                  errors.email &&
                    'border-destructive focus-visible:ring-destructive'
                )}
                {...register('email')}
              />
              {errors.email && (
                <p className="text-destructive text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Campo Contraseña */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-foreground text-sm font-medium"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="**********"
                className={cn(
                  'border-input flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm transition-colors',
                  'placeholder:text-muted-foreground',
                  'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                  errors.password &&
                    'border-destructive focus-visible:ring-destructive'
                )}
                {...register('password')}
              />
              {errors.password && (
                <p className="text-destructive text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Campo Confirmar Contraseña */}
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="text-foreground text-sm font-medium"
              >
                Confirmar Contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="**********"
                className={cn(
                  'border-input flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm transition-colors',
                  'placeholder:text-muted-foreground',
                  'focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                  errors.confirmPassword &&
                    'border-destructive focus-visible:ring-destructive'
                )}
                {...register('confirmPassword')}
              />
              {errors.confirmPassword && (
                <p className="text-destructive text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Botón Registrarse */}
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creando cuenta...' : 'Registrarse'}
            </Button>
          </form>

          {/* Link a Login */}
          <div className="text-muted-foreground mt-6 text-center text-sm">
            ¿Ya tienes cuenta?{' '}
            <Link
              to="/login"
              className="text-primary font-medium underline-offset-4 hover:underline"
            >
              Iniciar Sesión
            </Link>
          </div>

          {/* Link Volver al inicio */}
          <div className="mt-6">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </div>
        </div>

        {/* Personaje 3D animado a la derecha (visible en pantallas grandes) */}
        <div className="absolute right-0 bottom-0 hidden lg:block">
          <img
            src={happyHuman}
            alt="Personaje animado"
            className="h-[600px] w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
