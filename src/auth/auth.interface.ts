import { Request } from 'express';
import { Role } from 'src/users/role.enum';

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface RequestWithUser extends Request {
  user: {
    userId: string;
    refreshToken: string;
  };
}

export interface UserWithRoles {
  roles?: Role[];
}

export interface JwtPayload {
  sub: string;
  email: string;
  roles: Role[];
}

export interface RefreshTokenPayload {
  sub: string;
  email: string;
  roles: Role[];
  refreshToken: string;
}

export interface RequestWithRoles extends Request {
  user: {
    roles: Role[];
  };
}
