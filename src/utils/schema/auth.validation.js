import { z } from "zod";




/**
 * =============================
 * ! RESET PASSWORD FORM VALIDATION
 * =============================
 */
export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .nonempty("Password is required")
      .min(6, "Password must be at least 6 characters")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
        "Password must contain at least one letter and one number"
      ),

    confirmPassword: z
      .string()
      .nonempty("Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
