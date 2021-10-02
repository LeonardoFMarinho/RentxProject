import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entities/category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

// singleton - padrão de projeto - criar apenas uma instancia de uma classe que será global

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;
  private static INSTANCE: CategoriesRepository;
  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });
    await this.repository.save(category);
  }
  // listando todas as caregorias
  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }
  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
