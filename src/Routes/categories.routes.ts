import { response, Router } from 'express'
import multer from 'multer'
import { createCategoryController } from '../modules/cars/useCases/CreateCategory'
import { listCategoriesControlles } from '../modules/cars/useCases/listCategory'
import { importCategoryController } from '../modules/cars/useCases/ImportCategory'


const categoriesRoutes = Router()
const upload = multer({ //local de destino do save dos arquivos
    dest: "./tmp"

})


categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesControlles.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"/* nome do parametro no insomnia*/), (request, response) => {
    return importCategoryController.handle(request, response)
})
export { categoriesRoutes }

