import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface TokenPayLoad {
  iat: number;
  exp: number;
  sub: string;
}

export default function execute(token: string) {
  const { secret } = authConfig.jwt;

  if (!token) {
    throw new Error('JWT token is missing');
  }

  const decoded = verify(token, secret);
  const { sub } = decoded as TokenPayLoad;

  return sub;
}
