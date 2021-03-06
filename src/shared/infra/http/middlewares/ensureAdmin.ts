/* eslint-disable import/no-unresolved */
import { NextFunction, Request, Response } from 'express';

import { UsersRepository } from '@modules/account/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/appErrors';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppError('User is not admin');
  }
  return next();
}
