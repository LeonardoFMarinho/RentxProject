import { Category } from '../../model/category'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'


class listCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {

    }

    execute(): Category[] {
        const categories = this.categoriesRepository.list()
        return categories
    }
}

export { listCategoryUseCase }