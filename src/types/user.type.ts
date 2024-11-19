import { z } from 'zod';

import { rolesList } from '@/utils/const';

type TEntity<T> = {
  createdAt: string;
  updatedAt: string;
} & T;

const UserSchema = z.object({
  id: z.string(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  email: z.string().email(),
  password: z.string().optional(),
  username: z.string(),
  role: z.enum(rolesList as [string, ...string[]]), // Fix here
  isEmailVerified: z.boolean(),
});

type TUserZod = z.infer<typeof UserSchema>;

export type TUser = TEntity<TUserZod>;

export type TAuthMeResponse = {
  success: boolean;
  message: string;
  data: TUser;
  statusCode: number;
};
