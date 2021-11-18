import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { Car } from '@modules/cars/infra/typeorm/entities/car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create({
    brand,
    category_id,
    daily_rate,
    fine_amount,
    license_plate,
    description,
    name,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();
    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      fine_amount,
      license_plate,
      description,
      name,
    });

    this.cars.push(car);
  }
}

export { CarsRepositoryInMemory };
