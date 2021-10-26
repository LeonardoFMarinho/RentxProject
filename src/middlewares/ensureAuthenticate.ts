import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken'; /* verificar se  o token é valido ou n */

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
    throw new Error('Token missing');
  }

  const [, token] =
    authHeader.split(
      '',
    ); /* metodo split divide nossa informação, dividindo pelo . */
  try {
    const { sub } = verify(
      token,
      '2517d3cce5fd3aa5b7b35447244ffa18',
    ) as IPayload;
    console.log(sub);

    next();
  } catch {
    throw new Error('Invalid token!');
  }
}
