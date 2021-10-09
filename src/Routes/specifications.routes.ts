import { request, response, Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/CreateSpecification/CreateSpecificationController';
import { CreateSpecificationUseCase } from '../modules/cars/useCases/CreateSpecification/CreateSpecificationUseCase';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post('/', createSpecificationController.handle);

export { specificationsRoutes };
