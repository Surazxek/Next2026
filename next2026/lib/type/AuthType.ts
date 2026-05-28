
import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export type Icredentials = z.infer<typeof LoginSchema>;



export interface IUserDetail{
    id: string,
    firstName: string,
    lastName: string,
    middleName?: string,
    email: string,
    image: string,
    role: string,
}
