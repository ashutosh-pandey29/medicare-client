import React, { useState } from 'react';
import { 
  FaUser, FaEnvelope, FaLock, FaShieldAlt, 
  FaTrashAlt, FaSave, FaEdit, FaEye, FaEyeSlash,
  FaCheckCircle, FaExclamationTriangle
} from 'react-icons/fa';
import { MdSecurity, MdNotifications } from 'react-icons/md';

export const Account = ()=> {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="min-h-screen ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Account Settings</h1>
          <p className="text-gray-600">Manage your account information and preferences</p>
        </div>

        {/* Profile Picture Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaUser className="text-cyan-600" />
            Profile Picture
          </h2>
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 bg-linear-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              RK
            </div>
            <div>
              <p className="text-gray-700 mb-3">Update your profile picture</p>
              <div className="flex gap-3">
                <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-medium">
                  Upload New Photo
                </button>
                <button className="px-6 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors font-medium">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaEdit className="text-cyan-600" />
            Basic Information
          </h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="Dr. Rajesh Kumar"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                defaultValue="dr.rajesh.kumar"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="dr.rajesh.kumar@hospital.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue="+91 98765 43210"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold flex items-center gap-2 shadow-md">
              <FaSave />
              Save Changes
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
              Cancel
            </button>
          </div>
        </div>

        {/* Password & Security */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <FaLock className="text-cyan-600" />
            Password & Security
          </h2>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter current password"
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                />
                <button
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showNewPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  className="w-full px-4 py-3 pr-12 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                />
                <button
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-800 font-medium">
              <FaShieldAlt className="inline mr-2" />
              Password must be at least 8 characters with uppercase, lowercase, number and special character
            </p>
          </div>
          <div className="mt-6">
            <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold flex items-center gap-2 shadow-md">
              <FaLock />
              Update Password
            </button>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <MdSecurity className="text-cyan-600 text-3xl" />
            Two-Factor Authentication
          </h2>
          <p className="text-gray-600 mb-6">Add an extra layer of security to your account</p>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FaCheckCircle className="text-green-600 text-xl" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">2FA is Enabled</p>
                <p className="text-sm text-gray-600">Your account is protected</p>
              </div>
            </div>
            <button className="px-6 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors font-medium">
              Disable 2FA
            </button>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <MdNotifications className="text-cyan-600 text-3xl" />
            Notification Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-800">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive appointment and patient updates via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-cyan-500"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-800">SMS Notifications</p>
                <p className="text-sm text-gray-600">Get text messages for urgent updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-cyan-500"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-gray-800">Push Notifications</p>
                <p className="text-sm text-gray-600">Receive real-time alerts on your device</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-cyan-500"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-red-200">
          <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center gap-2">
            <FaExclamationTriangle />
            Danger Zone
          </h2>
          <p className="text-gray-600 mb-6">Once you delete your account, there is no going back. Please be certain.</p>
          <button 
            onClick={() => setShowDeleteModal(true)}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center gap-2 shadow-md"
          >
            <FaTrashAlt />
            Delete Account
          </button>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaExclamationTriangle className="text-red-600 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Delete Account?</h3>
                <p className="text-gray-600">This action cannot be undone. All your data will be permanently deleted.</p>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Type "DELETE" to confirm
                </label>
                <input
                  type="text"
                  placeholder="DELETE"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  Delete Forever
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}