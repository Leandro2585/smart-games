import express from 'express';
import setupRoutes from './routes';
import setupMiddlewares from './middleware'
import setupDatabase from './database';
import './containers'

const app = express();

setupDatabase();
setupMiddlewares(app);
setupRoutes(app);

export default app;
