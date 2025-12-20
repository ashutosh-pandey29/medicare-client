import React, { useState } from 'react';
import { CheckCircle, User, Stethoscope, Building2, Calendar, Hash, Phone, DollarSign, CreditCard, Banknote, Home } from 'lucide-react';

export default function AppointmentConfirmation() {
  const [paymentMethod, setPaymentMethod] = useState(null);

  const appointmentData = {
    patientName: "Sarah Johnson",
    doctorName: "Dr. Michael Chen",
    department: "Cardiology",
    date: "December 15, 2025",
    time: "10:30 AM",
    appointmentId: "APT-2025-00482",
    phone: "+1 (555) 123-4567",
    fees: "$150.00"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Success Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-20 h-20 text-green-500" strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Appointment Booked Successfully!
          </h1>
          <p className="text-gray-600 text-lg">
            Thank you, your appointment has been registered.
          </p>
        </div>

        {/* Appointment Summary Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Appointment Details</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                <User className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Patient Name</p>
                <p className="text-base font-semibold text-gray-900">{appointmentData.patientName}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                <Stethoscope className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Doctor Name</p>
                <p className="text-base font-semibold text-gray-900">{appointmentData.doctorName}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                <Building2 className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Department</p>
                <p className="text-base font-semibold text-gray-900">{appointmentData.department}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Appointment Date & Time</p>
                <p className="text-base font-semibold text-gray-900">{appointmentData.date} at {appointmentData.time}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                <Hash className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Appointment ID</p>
                <p className="text-base font-semibold text-gray-900">{appointmentData.appointmentId}</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="text-base font-semibold text-gray-900">{appointmentData.phone}</p>
              </div>
            </div>

            <div className="flex items-center pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 mr-4">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500">Consultation Fees</p>
                <p className="text-xl font-bold text-green-600">{appointmentData.fees}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Payment Method</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Online Payment Card */}
            <button
              onClick={() => setPaymentMethod('online')}
              className={`relative bg-white rounded-xl border-2 p-6 text-left transition-all hover:shadow-md ${
                paymentMethod === 'online' 
                  ? 'border-green-500 shadow-md' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              {paymentMethod === 'online' && (
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-6 h-6 text-green-500" fill="currentColor" />
                </div>
              )}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-50 mb-4">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Online Payment</h3>
              <p className="text-sm text-gray-600">Pay now via UPI, Card, Net Banking</p>
            </button>

            {/* Pay at Hospital Card */}
            <button
              onClick={() => setPaymentMethod('hospital')}
              className={`relative bg-white rounded-xl border-2 p-6 text-left transition-all hover:shadow-md ${
                paymentMethod === 'hospital' 
                  ? 'border-green-500 shadow-md' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              {paymentMethod === 'hospital' && (
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-6 h-6 text-green-500" fill="currentColor" />
                </div>
              )}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-50 mb-4">
                <Banknote className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pay at Hospital</h3>
              <p className="text-sm text-gray-600">Pay during visit at reception counter</p>
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <button
            disabled={!paymentMethod}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all ${
              paymentMethod 
                ? 'bg-green-500 hover:bg-green-600 shadow-sm hover:shadow' 
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          >
            {paymentMethod === 'online' ? 'Proceed to Payment' : paymentMethod === 'hospital' ? 'Confirm Appointment' : 'Select Payment Method'}
          </button>
          
          <button className="w-full py-4 px-6 rounded-xl font-semibold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all flex items-center justify-center">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}