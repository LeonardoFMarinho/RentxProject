import { Request, Response } from 'express'
import { listCategoryUseCase } from './listCaregoriesUseCase'


class listCategoriesContoller {
    constructor(private listCategoriesUseCase: listCategoryUseCase) {

    }
    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUseCase.execute()
        return response.json(all)
    }

}
export { listCategoriesContoller }