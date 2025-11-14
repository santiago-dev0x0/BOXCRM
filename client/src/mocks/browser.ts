import { setupWorker } from 'msw/browser';
import { authHandler } from './handlers/auth';

const handlers = [...authHandler];
export const worker = setupWorker(...handlers);

worker.start();
