import { ENDPOINTS } from '@/constants/enpoits';
import { http, HttpResponse } from 'msw';
import { API_BASE_URL } from '@/constants/api';

export const authHandler = [
  http.post(API_BASE_URL + ENDPOINTS.auth.login, ({ request }) => {
    const body = request.body;
    console.log(body);
    return HttpResponse.json({
      message: 'User registered successfully',
    });
  }),
];
