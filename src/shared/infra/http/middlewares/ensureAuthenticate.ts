import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken'; /* verificar se  o token é valido ou n */

import { AppError } from '@shared/errors/appErrors';
import { UsersRepository } from '@modules/account/infra/typeorm/repositories/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] =
    authHeader.split(
      ' ',
    ); /* metodo split divide nossa informação, dividindo pelo . */
  try {
    const { sub: user_id } = verify(
      token,
      '2517d3cce5fd3aa5b7b35447244ffa18',
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);
    if (!user) {
      throw new AppError('User does not exists!', 401);
    }
    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError('Invalid token!', 401);
  }
}
