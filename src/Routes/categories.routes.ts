import { response, Router } from 'express';
import multer from 'multer';
import { CreateCategoryController } from '../modules/cars/useCases/CreateCategory/CreateCategoryController';
import { ListCategoriesContoller } from '../modules/cars/useCases/listCategory/listCategoriesController';
import { ImportCategoryController } from '../modules/cars/useCases/ImportCategory/ImportCategoryController';

const categoriesRoutes = Router();
const upload = multer({
  // local de destino do save dos arquivos
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesContoller = new ListCategoriesContoller();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesContoller.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file' /* nome do parametro no insomnia */),
  importCategoryController.handle,
);

export { categoriesRoutes };
