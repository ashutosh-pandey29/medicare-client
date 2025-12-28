import { useState } from "react";
import { Button } from "../UI/Button";

export const UpdateAppointmentModelForm = () => {
  const [loading, setLoading] = useState(false); 
  return (
      <>
      
         <div className="p-1">
                <form  className="space-y-1">
                  {/* Department & Service */}
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    {/* Department Select */}
                    <div className="flex flex-col">
                      <select
                        className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                        name="departmentId"
                        id="departmentId"
                       
                      >
                        {/* <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept._id} value={dept._id}>
                            {dept.departmentName} — ₹{dept.fees}
                          </option>
                        ))} */}
                      </select>
                      {/* {touchedField.departmentId && errors.departmentId && (
                        <span className="text-red-500 text-sm mt-1">{errors.departmentId}</span>
                      )} */}
                    </div>
        
                    {/* Doctor Select */}
                    <div className="flex flex-col">
                      <select
                        className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                        name="doctorId"
                        id="doctorId"
                        
                      >
                        <option value="">Select Doctor</option>
                        {/* {doctor.length > 0 ? (
                          doctor.map((doc) => (
                            <option key={doc._id} value={doc._id}>
                              {doc.doctorName}
                            </option>
                          ))
                        ) : (
                          <option disabled>Doctor not found</option>
                        )} */}
                      </select>
                      {/* {touchedField.doctorId && errors.doctorId && (
                        <span className="text-red-500 text-sm mt-1">{errors.doctorId}</span>
                      )} */}
                    </div>
        
                    {/* Appointment Date */}
                    <div className="flex flex-col">
                      <input
                        type="date"
                        name="appointmentDate"
                        id="appointmentDate"
                        className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                       
                      />
                      {/* {touchedField.appointmentDate && errors.appointmentDate && (
                        <span className="text-red-500 text-sm mt-1">{errors.appointmentDate}</span>
                      )} */}
                    </div>
                  </div>
        
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="flex flex-col">
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        id="name"
                        className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                       
                      />
                      {/* {touchedField.name && errors.name && (
                        <span className="text-red-500 text-sm mt-1">{errors.name}</span>
                      )} */}
                    </div>
        
                    <div className="flex flex-col">
                      <input
                        type="tel"
                        placeholder="Enter Phone Number"
                        name="phone"
                        id="phone"
                        className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                     
                      />
                      {/* {touchedField.phone && errors.phone && (
                        <span className="text-red-500 text-sm mt-1">{errors.phone}</span>
                      )} */}
                    </div>
                  </div>
        
                  {/* Problem/Message */}
                  <div className="flex flex-col mt-4">
                    <textarea
                      placeholder="Please describe your problem or question..."
                      name="problem"
                      id="problem"
                      className="w-full h-[25vh] border border-zinc-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-300 resize-none"
                    
                    ></textarea>
                    {/* {touchedField.problem && errors.problem && (
                      <span className="text-red-500 text-sm mt-1">{errors.problem}</span>
                    )} */}
                  </div>
        
                  {/* Submit Button */}
        
                  <div className="flex items-center justify-end mt-2">
                    <Button
                      type="submit"
                      variant="submit"
                      disabled={loading}
                      label={`${loading ? "Updating..." : "Update Appointment"}`}
                      customCss={`${loading ? "bg-green-100 cursor-not-allowed" : ""}`}
                    />
                  </div>
                </form>
              </div>
      </>
  );
};
