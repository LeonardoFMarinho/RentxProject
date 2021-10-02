import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoryUseCase } from './listCaregoriesUseCase';
import { ListCategoriesContoller } from './listCategoriesController';

const categoriesRepository = null;
const listCaregoriesUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesControlles = new ListCategoriesContoller(
  listCaregoriesUseCase,
);

export { listCategoriesControlles };
