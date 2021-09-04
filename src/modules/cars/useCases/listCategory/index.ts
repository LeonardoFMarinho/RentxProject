import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository"
import { listCategoryUseCase } from "./listCaregoriesUseCase"
import { listCategoriesContoller } from "./listCategoriesController"


const categoriesRepository = CategoriesRepository.getInstance()
const listCaregoriesUseCase = new listCategoryUseCase(categoriesRepository)
const listCategoriesControlles = new listCategoriesContoller(listCaregoriesUseCase)

export { listCategoriesControlles }