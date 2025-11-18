import { LandingRoute } from '@/features/landing';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    Component: LandingRoute,
  },
]);

export default router;
