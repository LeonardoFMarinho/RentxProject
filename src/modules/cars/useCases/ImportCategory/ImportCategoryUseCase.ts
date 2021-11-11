import csvParse from 'csv-parse';
import fs from 'fs'; // filesistem nativo do node.
import { inject, injectable } from 'tsyringe';

import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parseFile = csvParse();

      stream.pipe(parseFile); // pega o que está sendo lido e envia para local determinado pelo dev
      parseFile
        .on('data', async line => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', err => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(async category => {
      // o map percorre todo o array e conseguimos realizar algumas manipulações
      const { name, description } = category;

      const existCategory = await this.categoriesRepository.findByName(name);
      if (!existCategory) {
        await this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}
export { ImportCategoryUseCase };
