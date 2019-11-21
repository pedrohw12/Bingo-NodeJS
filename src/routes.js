import { Router } from 'express';

import JogoController from './app/controllers/JogoController';

const routes = new Router();

routes.post('/registro', JogoController.store);
routes.get('/jogos', JogoController.index);

export default routes;