import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['doesnotmatter'] }))
app.use(AppRouter.getInstance());

const port = 3000;
app.listen(port, () => { console.log(`Listening on port ${port}`)})