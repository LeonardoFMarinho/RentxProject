import { container } from 'tsyringe';
import { UsersRepository } from '../../modules/account/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/account/repositories/IUsersRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepositoy } from '../../modules/cars/repositories/ISpecificationsRepository';
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
