import { useState } from "react";

export const useForm = (initialValue = {}, validationSchema) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (!validationSchema) return;

    const result = validationSchema.pick({ [name]: true }).safeParse({ [name]: value.trim() });

    if (!result.success) {
      setErrors((prev) => ({
        ...prev,
        [name]: result.error.issues[0].message,
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // validation on submit because user may be not touch an field try to direct submit

  const validateOnSubmit = (value) => {
    if (!validationSchema) return {};

    const result = validationSchema.safeParse(value);

    if (!result.success) {
      const formattedErrors = {};

      result.error.issues.forEach(({ path, message }) => {
        formattedErrors[path[0]] = message;
      });

      console.log(formattedErrors);
      setErrors(formattedErrors);
      return formattedErrors;
    }

    // Success case
    setErrors({});
    return {};
  };

  const resetForm = () => {
    setValues(initialValue);
    setErrors({});
  };

  console.log(errors);

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    validateOnSubmit,
    resetForm,
  };
};
