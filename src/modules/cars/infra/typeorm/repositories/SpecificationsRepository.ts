import { getRepository, Repository } from 'typeorm';

import {
  ISpecificationsRepositoy,
  ICreateSpecificationDTO,
} from '../../../repositories/ISpecificationsRepository';
import { Specification } from '../entities/Specification';

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
