import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string()
    .min(5, "Minimum 5 characters")
    .max(20, "Maximum 20 characters")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      "Letters and numbers only"
    ),

  email: z
    .string()
    .email("Enter a valid email address"),

  password: z
    .string()
    .min(8, "Minimum 8 characters")
    .max(20, "Maximum 20 characters")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)[^\s]+$/,
      "Must include letters & numbers, no spaces"
    ),
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


