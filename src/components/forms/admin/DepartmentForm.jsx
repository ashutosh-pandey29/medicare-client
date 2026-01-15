import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../../hooks/custom/useForm";
import { BiLoader } from "react-icons/bi";
import { toast } from "react-toastify";
import { useDepartment } from "../../../hooks/department/useDepartment";
import { useEffect } from "react";
import { fetchDepartmentByIdService } from "../../../services/department/department.service";
import { departmentValidationSchema } from "../../../utils/schema/department.validation";

export const DepartmentForm = ({ isEdit = false }) => {
  const navigate = useNavigate();
  const { departmentId } = useParams();

  const { loading, fetchDepartment, createDepartment, updateDepartment } = useDepartment();
  const { values, setValues, errors, setErrors, resetForm, handleChange, validateOnSubmit } =
    useForm(
      {
        departmentName: "",
        departmentFees: "",
        departmentDescription: "",
      },
      departmentValidationSchema
    );

  useEffect(() => {
    if (!departmentId) return;

    const loadDepartment = async () => {
      const response = await fetchDepartmentByIdService(departmentId);

      console.log(response);

      if (response.success) {
        setValues({
          departmentName: response.data.departmentName || "",
          departmentFees: response.data.departmentFees || "",
          departmentDescription: response.data.departmentDescription || "",
        });
      }
    };

    loadDepartment();
  }, [departmentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate data on submit
    const formErrors = validateOnSubmit(values);
    if (Object.keys(formErrors).length > 0) return;

    const response = departmentId
      ? await updateDepartment(values, departmentId, setErrors)
      : await createDepartment(values, setErrors);

    if (response.success) {
      toast.success(response.message || "Department Created Successfully");
      resetForm();
      navigate(-1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-1 md:p-6 bg-gray-900 text-gray-200 rounded">
      {/* Page Header */}
      <div className="flex items-center gap-3 border-b border-slate-700 pb-3 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
        >
          <FaArrowLeft />
          Back
        </button>

        <h1 className="text-xl font-semibold text-white">
          {isEdit ? "Update Department" : "Create Department"}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ===== FORM ===== */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-md shadow p-4 lg:p-6 space-y-5"
        >
          {/* Department Name */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">Department Name</label>
            <input
              name="departmentName"
              placeholder="Cardiology"
              value={values.departmentName}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-3 border-gray-700 
              bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
            />
            {errors.departmentName && (
              <span className="text-sm text-red-700">{errors.departmentName}</span>
            )}
          </div>

          {/* Department Fees */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">Consultation Fees</label>
            <input
              type="text"
              name="departmentFees"
              placeholder="500"
              value={values.departmentFees}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-3 border-gray-700 
              bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
            />
            {errors.departmentFees && (
              <span className="text-sm text-red-700">{errors.departmentFees}</span>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-slate-400 mb-1">Description</label>
            <textarea
              name="departmentDescription"
              value={values.departmentDescription}
              onChange={handleChange}
              rows={4}
              placeholder="Short description about the department"
              className="w-full border rounded-md px-4 py-3 border-gray-700 
              bg-gray-900 text-gray-200 outline-none focus:border-blue-500"
            />
            {errors.departmentDescription && (
              <span className="text-sm text-red-700">{errors.departmentDescription}</span>
            )}
          </div>

          {/* Submit */}
          <div className="pt-3 text-right">
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-2.5 rounded text-white transition
    ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"}`}
            >
              {loading ? (
                <BiLoader className="animate-spin text-xl text-white" />
              ) : isEdit ? (
                "Update Department"
              ) : (
                "Create Department"
              )}
            </button>
          </div>
        </form>

        {/* ===== INFO PANEL ===== */}
        <div className="bg-gray-800 rounded-md p-4 lg:p-6 text-sm text-slate-300 space-y-4">
          <h3 className="text-base font-semibold text-white border-b border-slate-600 pb-2">
            Guidelines
          </h3>

          <ul className="list-disc pl-4 space-y-2 text-slate-400">
            <li>Department name must be unique.</li>
            <li>Fees should be numeric and non-negative.</li>
            <li>Description is optional but recommended.</li>
            <li>Departments can later be linked with doctors.</li>
            <li>Deleting a department may affect appointments.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
