import { Router } from 'express';

import { AuthenticateUseController } from '../modules/account/usecases/authenticateUser/authenticateUserController';

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUseController();

authenticateRoutes.post('/sessions', authenticateUserController.handle);

export { authenticateRoutes };
