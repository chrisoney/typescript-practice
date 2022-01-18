import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';

import './controllers/LoginController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['doesnotmatter'] }))
app.use(router);
app.use(AppRouter.getInstance());

const port = 3000;
app.listen(port, () => { console.log(`Listening on port ${port}`)})