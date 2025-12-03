import { useEffect } from 'react';
import { useAuthRedirect } from '@/hooks/useAuthRedirect';
import { useAuthStore } from '@/store/authStore';

export function DashboardPage() {
  useAuthRedirect(); // ← Redirige si no autenticado

  const { user, token, isAuthenticated } = useAuthStore();

  useEffect(() => {
    console.log('Auth state restored:', { user, token, isAuthenticated });
  }, [user, token, isAuthenticated]);

  return (
    <div>
      <h1>Bienvenido, {user?.username}!</h1>
      <p>Estás en el panel protegido.</p>
    </div>
  );
}
