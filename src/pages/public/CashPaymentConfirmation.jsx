import React from 'react';
import { FaMoneyBillWave, FaHospital, FaUserMd, FaCalendarCheck, FaClock, FaMapMarkerAlt, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';
import { MdPrint } from 'react-icons/md';
import { IoMdAlert } from 'react-icons/io';

export const CashPaymentConfirmation = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-yellow-50 to-amber-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-orange-500 to-amber-500 text-white p-8 text-center">
          <div className="flex justify-center mb-4">
            <FaMoneyBillWave className="text-7xl animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Appointment Booked!</h1>
          <p className="text-orange-100 text-lg">Cash Payment Selected</p>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Important Alert */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-5 mb-6 rounded-r-lg">
            <div className="flex items-start">
              <IoMdAlert className="text-amber-600 text-3xl mr-3 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-900 text-lg mb-2">Payment Pending</h3>
                <p className="text-amber-800 text-sm leading-relaxed">
                  You need to pay <span className="font-bold text-lg">₹500</span> in cash at the hospital reception counter. 
                  Your appointment will be confirmed only after the payment is completed.
                </p>
              </div>
            </div>
          </div>

           {/* Booking ID */}
          <div className="bg-gray-100 rounded-lg p-4 mb-6 text-center">
            <p className="text-gray-600 text-sm mb-1">Booking ID</p>
            <p className="text-gray-900 font-bold text-2xl tracking-wider">APT2025123456</p>
            <p className="text-gray-500 text-xs mt-1">Please show this ID at the counter</p>
          </div>

          {/* Appointment Details */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaCalendarCheck className="mr-2 text-orange-600" />
              Appointment Details
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-5 space-y-4">
              <div className="flex items-start">
                <FaHospital className="text-blue-600 mt-1 mr-3 text-xl shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-600 text-sm">Hospital Name</p>
                  <p className="text-gray-900 font-semibold">City Care Hospital</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-red-600 mt-1 mr-3 text-xl shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-600 text-sm">Address</p>
                  <p className="text-gray-900 font-semibold">Sector 15, Mumbai - 400001</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4"></div>

              <div className="flex items-start">
                <FaUserMd className="text-teal-600 mt-1 mr-3 text-xl shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-600 text-sm">Doctor</p>
                  <p className="text-gray-900 font-semibold">Dr. Rajesh Kumar</p>
                  <p className="text-gray-600 text-xs">Cardiologist</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaCalendarCheck className="text-green-600 mt-1 mr-3 text-xl shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-600 text-sm">Appointment Date</p>
                  <p className="text-gray-900 font-semibold">15 December 2025</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaClock className="text-orange-600 mt-1 mr-3 text-xl shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-600 text-sm">Appointment Time</p>
                  <p className="text-gray-900 font-semibold">10:30 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Amount */}
          <div className="bg-linear-to-r from-orange-100 to-amber-100 border-2 border-orange-300 rounded-lg p-5 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaMoneyBillWave className="text-orange-600 text-3xl mr-3" />
                <div>
                  <p className="text-gray-700 text-sm">Consultation Fee</p>
                  <p className="text-gray-900 font-bold text-2xl">₹500</p>
                </div>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg border border-orange-300">
                <p className="text-orange-600 font-bold text-sm">CASH</p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <h3 className="font-bold text-blue-900 mb-3 flex items-center">
              <FaInfoCircle className="mr-2" />
              Important Instructions
            </h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-600 mr-2 mt-1 shrink-0" />
                <span>Please arrive <strong>15 minutes before</strong> your scheduled appointment time</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-600 mr-2 mt-1 shrink-0" />
                <span>Show your <strong>booking ID</strong> at the reception counter and make the payment</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-600 mr-2 mt-1 shrink-0" />
                <span>Bring a <strong>valid ID proof</strong> and any previous medical records</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-blue-600 mr-2 mt-1 shrink-0" />
                <span>You will receive a <strong>token number</strong> after payment confirmation</span>
              </li>
            </ul>
          </div>

         

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition duration-300">
              <MdPrint className="mr-2 text-xl" />
              Print Details
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              View My Appointments
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
