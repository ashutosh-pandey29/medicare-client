import { z } from "zod";

export const departmentValidationSchema = z.object({
  departmentName: z
    .string({ required_error: "Department name is required" })
    .min(1, "Department name must contain at least 1 character")
    .max(100, "Department name must not exceed 100 characters")
    .transform((val) => val.trim()),

  departmentFees: z.coerce
    .number({
      required_error: "Department fees are required",
      invalid_type_error: "Department fees must be a valid number",
    })
    .min(0, "Department fees must be a positive number")
    .max(1_000_000, "Department fees must not exceed 1,000,000"),

  departmentDescription: z
    .string()
    .max(500, "Department description must not exceed 500 characters")
    .optional()
    .transform((val) => val?.trim()),
});
