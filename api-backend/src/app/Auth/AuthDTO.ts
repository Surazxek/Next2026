import { z } from "zod";

export const RegisterUserDTO = z.object({
  name: z.string().min(4, "Name must be at least 2 characters").max(30),
  email: z.string().nonempty().email("Invalid email address"),
  username: z.string()
    .nonempty()
    .min(4, "Username must be at least 4 characters")
    .max(25, "Max is 25 characters"),
  password: z.string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,25}$/,
      "Password must be 6-25 chars, include uppercase, lowercase, number, and special character"
    )
    .min(6, "Password must be at least 6 characters")
    .max(25, "Max is 25 characters for password"),
  confirmPassword: z.string()
    .nonempty()
    .min(6, "Confirm password must be at least 6 characters"),
  phone: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
}).refine((val) => val.password === val.confirmPassword, {
  message: "Password and confirmPassword must match",
  path: ["confirmPassword"],
});

export const LoginDTO = z.object({
  username: z.string()
    .nonempty("Username is required")
    .min(5, "Username must be at least 5 characters"),
  password: z.string()
    .nonempty("Password is required")
});