import express, { Request, Response } from 'express';
import { setupApp } from './setup-app';

const app = express();
setupApp(app);

export default app; // <-- экспортируем как handler
