import { useState, useEffect, useRef } from "react";

/**
 *
 * @param {object} value - form data
 * @param {object} schema - zod validation schema
 */
export const useZodValidation = (value, schema) => {
  const [errors, setErrors] = useState({});

  // useEffect hook - run whenever value or schema changed

  useEffect(() => {
    if (!schema || !value) return;

    const result = schema.safeParse(value);

    if (!result.success) {
      const formattedErrors = {};
      result.error.issues.forEach(({ path, message }) => {
        formattedErrors[path[0]] = message;
      });
      setErrors(formattedErrors);
      return;
    }
    setErrors({});

    return;
  }, [schema, JSON.stringify(value)]);

  // validation on submit because user may bhi not touch an field try t direct submit
  const validateOnSubmit = () => {
    if (!schema || !value) return {};

    const result = schema.safeParse(value);

    if (!result.success) {
      const formattedErrors = {};

      result.error.issues.forEach(({ path, message }) => {
        formattedErrors[path[0]] = message;
      });

      console.log(formattedErrors)
      setErrors(formattedErrors);
      return formattedErrors;
    }

    // Success case
    setErrors({});
    return {};
  };

  return { errors, validateOnSubmit };
};
