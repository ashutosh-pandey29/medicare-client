import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .regex(
      /^[a-zA-Z0-9._-]+$/,
      "Username can only contain letters, numbers, dot (.), underscore (_) and hyphen (-)"
    )
    .max(15, "Username cannot exceed 15 characters")
    .min(5, "Username must be at least 5 characters")
    .nonempty("Username is required"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address")
    .nonempty("Email is required"),

  password: z
    .string()
    .regex(/^[^\s]{8,32}$/, "Password must be 8-32 characters and no spaces")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .nonempty("Password is required"),
});

export const loginSchema = z.object({
  login_id: z
    .string()
    .refine(
      (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || /^[a-zA-Z0-9._-]+$/.test(val),
      "Enter valid email or username"
    )
    .nonempty("login id  field is required."),
  password: z.string().nonempty("Password field is required."),
});

/**
 * ====================================
 * !APPOINTMENT VALIDATION  SCHEMA
 * ====================================
 */

export const appointmentSchema = z.object({
  departmentId: z.string().min(1, "Please select a department"),

  doctorId: z.string().trim().min(1, "Doctor ID is required"),

  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .nonempty("Name field is required"),

  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),

  email: z.string().trim().email("Invalid email format").optional().nullable(),

  appointmentDate: z.string().refine((val) => {
    const selected = new Date(val);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return selected >= now;
  }, "Date must be today or in the future"),

  problem: z.string().trim().min(5, "Problem description must be at least 5 characters"),
});

// department schema

export const departmentSchema = z.object({
  departmentName: z.string().trim().min(1, "This field is required."),
  fees: z.coerce
    .number({ invalid_type_error: "Fees must be a number" })
    .positive("Fees must be a positive number"),
});
