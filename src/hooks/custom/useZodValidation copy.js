import { useState, useEffect } from "react";

/**
 *
 * @param {object} value - form data
 * @param {object} schema - zod validation schema
 */
export const useZodValidation = (value, schema) => {
  const [errors, setErrors] = useState({});

  // useEffect hook - run whenever value or schema changed

  useEffect(() => {
    // check schema provided or not - if not simply return

    if (!schema) return;

    const result = schema.safeParse(value);

    if (result.success) {
      setErrors({});
    } else {
      const fieldErrors = {};
      result.error.errors?.forEach(({ path, message }) => {
        const key = path[0] || "form";
        if (!fieldErrors[key]) fieldErrors[key] = [];
        fieldErrors[key].push(message);
      });
      setErrors(fieldErrors);
    }
  }, [schema, value]);

  // validation on submit because user may bhi not touch an field try t direct submit

  const validateOnSubmit = () => {
    if (!schema) return;
    try {
      schema.parse(value);
      setErrors({});
      return {};
    } catch (err) {
      const fieldErrors = {};
      err.errors?.forEach(({ path, message }) => {
        fieldErrors[path[0]] = message;
      });
      setErrors(fieldErrors);
      return fieldErrors;
    }
  };

  return { errors, validateOnSubmit };
};
