import { useState, useEffect } from "react";
import { useForm } from "../../hooks/custom/useForm";
import { departmentSchema } from "../../utils/validationSchema";
import { useToken } from "../../hooks/custom/useToken";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
export const DepartmentForm = () => {
  const token = useToken();
  const { departmentId } = useParams();

  const initialValue = {
    departmentName: "",
    fees: "",
  };

  const onSubmit = async (value) => {
    try {
      // API request to add new department
      const response = await fetch(`${import.meta.env.VITE_API_URL}/department/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(value),
      });

      // Parse JSON response
      const jsonResponse = await response.json();

      // if response is ok and status is true
      if (response.ok && jsonResponse.status) {
        toast.success(jsonResponse.message || "Department added successfully!");
      } else {
        //Handle server errors (status false or 4xx/5xx)
        toast.error(jsonResponse.message || "Failed to add department.");
      }
    } catch (err) {
      //Handle network or unexpected errors
      console.error("Error adding department:", err);
      toast.error(err?.message || "Something went wrong. Please try again!");
    } finally {
      //reset form
      resetForm();
    }
  };

  const { value, setValue, errors, handleChange, handleSubmit, resetForm } = useForm(
    initialValue,
    departmentSchema,
    onSubmit
  );

  // update department
  useEffect(() => {
    if (!departmentId) return;

    try {
      const getDepartment = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/department/get/${departmentId}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const jsonResponse = await response.json();

          if (response.ok && jsonResponse.status) {
            setValue({
              departmentName: jsonResponse.data.departmentName,
              fees: jsonResponse.data.fees,
            });
          } else {
            throw new Error(`${jsonResponse.message}`);
          }
        } catch (err) {
          console.log(err);
          toast.error(err.message || "Something went wrong");
        }
      };
      getDepartment();
    } catch (err) {
      console.log(err);
    }
  }, [departmentId]);

  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold bg-linear-to-r from-green-500 to-purple-500 text-transparent bg-clip-text">
            {departmentId ? "Update Department" : "Add New Department"}
          </h1>
          {/* <p className="text-gray-500 text-sm mt-1">
            Add new Department with department name and fees.
          </p> */}
        </div>

        <div className="bg-white p-5 shadow rounded mb-8">
          <h2 className="text-lg font-semibold border-b border-zinc-300 pb-2 mb-3">
            Add Department
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1  gap-5">
              <div>
                <label className="text-sm text-gray-600">Department Name:</label>
                <input
                  type="text"
                  className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none"
                  name="departmentName"
                  id="departmentName"
                  value={value.departmentName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Fees:</label>
                <input
                  type="text"
                  className="border border-zinc-300 w-full h-10 px-3 rounded mt-1 outline-none"
                  name="fees"
                  id="fees"
                  value={value.fees}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="text-right mt-5">
              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-800"
              >
                {departmentId ? "Update" : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
