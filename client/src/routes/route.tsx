import { LandingRoute } from '@/features/landing';
import { LoginRoute, RegisterRoute } from '@/features/auth';
import { createBrowserRouter } from 'react-router';
import { DashboardPage } from '@/features/dashboard/DashboardPage';

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
  {
    path: '/dashboard',
    Component: DashboardPage,
  },
]);

export default router;
