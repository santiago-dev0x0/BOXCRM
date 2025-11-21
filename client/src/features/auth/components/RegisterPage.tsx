'use client';

import { useForm, Controller } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router';
import { MessageSquareDot, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Field, FieldLabel, FieldError } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import happyHuman from '@/assets/register-image.svg';

const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, { error: 'El nombre debe tener al menos 2 caracteres' }),
    email: z
      .string()
      .min(1, 'El correo electrónico es obligatorio')
      .email('Email inválido'),
    password: z
      .string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: z.string().min(1, 'Debes confirmar tu contraseña'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterFormData> = (data) => {
    // TODO: Implementar lógica de registro
    console.log('Datos del formulario:', data);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#1a103c]">
        {/* 1. Capas de Color (Radial Gradients Superpuestos) */}
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

        {/* 2. Capa de Textura/Ruido */}
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
      {/* Contenedor principal */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 lg:justify-start lg:px-8 lg:py-12">
        {/* Tarjeta blanca con formulario */}
        <div className="relative z-20 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
          {/* Logo BoxCRM */}
          <div className="mb-6 flex items-center justify-center gap-2">
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
          <form
            onSubmit={form.handleSubmit(onSubmit, (errors) => {
              console.log('Errores del formulario:', errors);
            })}
          >
            {/* Campo Nombre */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-name">
                    Nombre Completo
                  </FieldLabel>
                  <Input
                    {...field}
                    id="register-name"
                    aria-invalid={fieldState.invalid}
                    data-invalid={fieldState.invalid}
                    placeholder="Tu nombre completo"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Campo Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-email">
                    Correo Electrónico
                  </FieldLabel>
                  <Input
                    {...field}
                    id="register-email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    data-invalid={fieldState.invalid}
                    placeholder="usuario@empresa.com"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Campo Password */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-password">
                    Contraseña
                  </FieldLabel>
                  <Input
                    {...field}
                    id="register-password"
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

            {/* Campo Confirmar Password */}
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="register-confirm">
                    Confirmar Contraseña
                  </FieldLabel>
                  <Input
                    {...field}
                    id="register-confirm"
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

            {/* Botón Registrarse */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full rounded-md shadow-lg shadow-blue-600/20"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>Creando cuenta...</>
                ) : (
                  'Registrarse'
                )}
              </Button>
            </div>
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
