import React from 'react';
import { FaCheckCircle, FaCalendarCheck, FaHospital, FaUserMd, FaClock, FaFileInvoiceDollar } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoMdDownload } from 'react-icons/io';

export const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 via-blue-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Success Header */}
        <div className="bg-linear-to-r from-green-500 to-teal-500 text-white p-8 text-center">
          <div className="flex justify-center mb-4">
            <FaCheckCircle className="text-7xl animate-bounce" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
          <p className="text-green-100 text-lg">Your appointment has been confirmed</p>
        </div>

        {/* Payment Details */}
        <div className="p-8">
          {/* Transaction Info */}
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-medium">Transaction ID:</span>
              <span className="text-gray-900 font-semibold">TXN123456789</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">Amount Paid:</span>
              <span className="text-green-600 font-bold text-xl">₹500.00</span>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaCalendarCheck className="mr-2 text-teal-600" />
              Appointment Details
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <FaHospital className="text-blue-600 mt-1 mr-3 text-xl" />
                <div>
                  <p className="text-gray-600 text-sm">Hospital</p>
                  <p className="text-gray-900 font-semibold">City Care Hospital</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaUserMd className="text-teal-600 mt-1 mr-3 text-xl" />
                <div>
                  <p className="text-gray-600 text-sm">Doctor</p>
                  <p className="text-gray-900 font-semibold">Dr. Rajesh Kumar (Cardiologist)</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaCalendarCheck className="text-green-600 mt-1 mr-3 text-xl" />
                <div>
                  <p className="text-gray-600 text-sm">Date</p>
                  <p className="text-gray-900 font-semibold">15 December 2025</p>
                </div>
              </div>

              <div className="flex items-start">
                <FaClock className="text-orange-600 mt-1 mr-3 text-xl" />
                <div>
                  <p className="text-gray-600 text-sm">Time</p>
                  <p className="text-gray-900 font-semibold">10:30 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition duration-300">
              <IoMdDownload className="mr-2 text-xl" />
              Download Receipt
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition duration-300">
              <MdEmail className="mr-2 text-xl" />
              Email Receipt
            </button>
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <span className="font-semibold">Note:</span> Please arrive 15 minutes before your scheduled appointment time. Bring a valid ID and any previous medical records.
            </p>
          </div>

          {/* Footer Button */}
          <button className="w-full bg-linear-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            View My Appointments
          </button>
        </div>
      </div>
    </div>
  );
};
