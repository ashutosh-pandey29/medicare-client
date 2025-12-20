import { useState } from "react";
import { useZodValidation } from "./useZodValidation";
import { toast } from "react-toastify";

export const useForm = (initialValue = {}, validationSchema, callback) => {
  const [value, setValue] = useState(initialValue);
  const { errors, validateOnSubmit } = useZodValidation(value, validationSchema);

  // console.log(errors);

  // handleInput change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  // handle submit

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitErrors = validateOnSubmit();


    if (Object.keys(submitErrors).length > 0) {
      Object.values(submitErrors).forEach((msg) => toast.error(msg));

      return;
    }

    if (callback) {
      callback(value);
    }
  };

  // reset form

  const resetForm = () => {
    setValue(initialValue);
  };

  return { value, setValue, errors, handleChange, handleSubmit, resetForm };
};
