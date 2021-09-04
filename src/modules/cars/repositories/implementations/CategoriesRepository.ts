
import { Category } from "../../model/category"
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository"



//singleton - padrão de projeto - criar apenas uma instancia de uma classe que será global 




class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[]
    private static INSTANCE: CategoriesRepository
    private constructor() {
        this.categories = []
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository
        }
        return CategoriesRepository.INSTANCE
    }
    create({ description, name }: ICreateCategoryDTO): void {

        const category = new Category()
        Object.assign(category,  /* essa função do js permite que seja passado um obj como primeiro parametro,
         e como segundo parametro, com os atributos que queremos passar para o objeto*/
            {
                name,
                description,
                created_at: new Date()
            })

        this.categories.push(category)


    }
    //listando todas as caregorias
    list(): Category[] {
        return this.categories

    }
    findByName(name: string): Category {
        const category = this.categories.find(category => category.name === name)
        return category
    }
}

export { CategoriesRepository }