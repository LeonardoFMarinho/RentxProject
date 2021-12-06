import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListAvailableCarsController } from '@modules/cars/useCases/ListAvailableCars/listAvailableCarsController';

import { ensureAuthenticate } from '../../../../../registerCarsModel/src/shared/infra/http/middlewares/ensureAuthenticate';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post(
  '/',
  ensureAuthenticate,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get('/available', listAvailableCarsController.handle);

export { carsRoutes };