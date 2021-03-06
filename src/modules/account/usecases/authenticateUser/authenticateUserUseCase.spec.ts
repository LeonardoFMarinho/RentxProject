/* eslint-disable import/no-unresolved */
import { ICreateUserDTO } from '@modules/account/dtos/ICreateUserDTO';
import { UserRepositoryInMemory } from '@modules/account/repositories/in-memory/UsersRepositoryInMemory';
import { AppError } from '@shared/errors/appErrors';

import { CreateUserUseCase } from '../createUser/createUserUseCase';
import { AuthenticateUserUseCase } from './authenticateUserUsecase';

let authenticateUserUsecase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UserRepositoryInMemory;
let createUserUsecase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UserRepositoryInMemory();
    authenticateUserUsecase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );
    createUserUsecase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '00123',
      email: 'user@test.com',
      password: '1234',
      name: 'user test',
    };
    await createUserUsecase.execute(user);
    const result = await authenticateUserUsecase.execute({
      email: user.email,
      password: user.password,
    });
    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an non extistent user', () => {
    expect(async () => {
      await authenticateUserUsecase.execute({
        email: 'false@email.com',
        password: '1234',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be not be able to authenticate with incorrect password', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '9999',
        email: 'user@user.com',
        password: '1234',
        name: 'user Test Error',
      };
      await createUserUsecase.execute(user);
      await authenticateUserUsecase.execute({
        email: user.email,
        password: 'incorrect password',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
