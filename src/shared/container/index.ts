/* eslint-disable import/no-unresolved */
import { container } from 'tsyringe';

import '@shared/container/providers';

import { UsersRepository } from '@modules/account/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@modules/account/repositories/IUsersRepository';
import { CarsImagesRepository } from '@modules/cars/infra/typeorm/repositories/CarsImagesRepository';
import { CarsRepository } from '@modules/cars/infra/typeorm/repositories/CarsRepository';
import { CategoriesRepository } from '@modules/cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/infra/typeorm/repositories/SpecificationsRepository';
import { ICarsImagesRepository } from '@modules/cars/repositories/ICarsImagesRepository';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { ISpecificationsRepositoy } from '@modules/cars/repositories/ISpecificationsRepository';
import { RentalsRepository } from '@modules/rentals/infra/repositories/rentalsRepository';
import { IRentalRepository } from '@modules/rentals/repositories/IRentalsRepository';
// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepositoy>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

container.registerSingleton<ICarsImagesRepository>(
  'CarsImagesRepository',
  CarsImagesRepository,
);

container.registerSingleton<IRentalRepository>(
  'RentalsRepository',
  RentalsRepository,
);
