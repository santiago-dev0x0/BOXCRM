// src/hooks/useAuthRedirect.ts
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthStore } from '@/store/authStore';

export const useAuthRedirect = () => {
  const { token, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    // Si no hay token o no está autenticado, redirigir a login
    if (!token || !isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [token, isAuthenticated, navigate]);
};
