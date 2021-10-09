import { getRepository, Repository } from 'typeorm';
import { Specification } from '../../entities/Specification';
import {
  ISpecificationsRepositoy,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepositoy {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  // criando especificação abaixo
  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });
    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOne({
      name,
    });
    return specification;
  }
}

export { SpecificationsRepository };
