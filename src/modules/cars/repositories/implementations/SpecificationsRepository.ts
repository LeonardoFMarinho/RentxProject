import { Specification } from '../../entities/Specification';
import {
  ISpecificationsRepositoy,
  ICreateSpecificationDTO,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepositoy {
  private Specifications: Specification[]; // "tabelaa fake"

  constructor() {
    this.Specifications = []; // inicializando array
  }

  // criando especificação abaixo
  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.Specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.Specifications.find(
      specification => specification.name === name,
    );
    return specification;
  }
}

export { SpecificationsRepository };
