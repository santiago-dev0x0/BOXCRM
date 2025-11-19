import { LandingRoute } from '@/features/landing';
import { LoginRoute, RegisterRoute } from '@/features/auth';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    Component: LandingRoute,
  },
  {
    path: '/login',
    Component: LoginRoute,
  },
  {
    path: '/register',
    Component: RegisterRoute,
  },
]);

export default router;
