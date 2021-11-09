import { AppError } from '../../../../errors/appErrors';
import { CategoriesRepositoryInMemory } from '../../repositories/in-memory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from './createCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create Category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory,
    );
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category Test',
      description: 'Category Description Test',
    };
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name,
    );
    expect(categoryCreated).toHaveProperty('id');
  });
});

it('should not be able to create a new category with name exists', async () => {
  expect(async () => {
    const category = {
      name: 'Category Test',
      description: 'Category Description Test',
    };
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });
  }).rejects.toBeInstanceOf(AppError);
});

/*
// serve pra agrupar os testes
describe('Criar Categoria', () => {
  // para criar os testes sempre criar dentro de um 'it'("descrição do que eu espero que meu teste faça ")
  it('espero que 2+2 seja 4', () => {
    const soma = 2 + 2;
    const resultado = 4;

    expect(soma).toBe(resultado);
  });
*/
