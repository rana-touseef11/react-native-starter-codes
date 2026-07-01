import { z } from 'zod';

// schemas
export const LoginSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).max(50, { message: 'max 50 Characters' }).email('Invalid email address'),
  password: z.string().min(1, { message: 'Password is required' }).min(8, { message: 'Minimum 8 characters' }).max(64, { message: 'max 64 Characters' }),
});

export const SignUpSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }).max(50, { message: 'max 50 Characters' }),
  lastName: z.string().min(1, { message: 'Last name is required' }).max(50, { message: 'max 50 Characters' }),
  email: z.string().min(1, { message: 'Email is required' }).max(50, { message: 'max 50 Characters' }).email('Invalid email address'),
  password: z.string().min(1, { message: 'Password is required' }).min(8, { message: 'Minimum 8 characters' }).max(64, { message: 'max 64 Characters' }),
});

// types
export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type SignUpSchemaType = z.infer<typeof SignUpSchema>;