import { object, string, number } from 'yup';

export const  userSchema = object({
  name: string().required().min(3),
  age: number().required().positive().integer(),
  email: string().email().required(),
  company : string().required().min(8),
  phonenumber : number().required().positive().integer().min(
    1000000000).max(99999999999),
  password : string().required().min(6)
});

