import { startServer } from './server';
import { getRouter } from './router';

const port = process.env.APP_PORT ? Number(process.env.APP_PORT) : 80;
const router = getRouter();
startServer(port, router);
