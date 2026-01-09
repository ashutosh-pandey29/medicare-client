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

    confirmPassword: z.string().nonempty("Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

/**
 * =======================
 * ! ACCOUNT UPDATE DATA VALIDATION
 * =======================
 */

export const accountUpdateSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(5, "Username must be at least 5 characters")
    .max(20, "Username must not exceed 20 characters")
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/, "Username must contain letters and numbers only"),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email("Please provide a valid email address"),
});

export const passwordUpdateSchema = z
  .object({
    oldPassword: z
      .string()
      .min(8, "Old password must be at least 8 characters")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
        "Old password must contain letters and numbers only"
      ),

    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
        "New password must contain letters and numbers only"
      ),

    confirmPassword: z.string().min(8, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New password and confirm password must match",
    path: ["confirmPassword"],
  });
