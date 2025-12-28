import React, { useState } from "react";
import { FaCopy, FaDownload, FaWhatsapp } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export const ShareOptionsModal = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <>
      <div className="bg-white w-full p-6 relative animate-fadeIn">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Download */}
          <button className="flex flex-col items-center gap-2 p-4 bg-linear-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 rounded-xl transition-all duration-200 group">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <FaDownload className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-700">Download</span>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="flex flex-col items-center gap-2 p-4 bg-linear-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-xl transition-all duration-200 group"
          >
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              {copied ? (
                <FaCheckCheck className="w-6 h-6 text-white" />
              ) : (
                <FaCopy className="w-6 h-6 text-white" />
              )}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {copied ? "Copied!" : "Copy Link"}
            </span>
          </button>
        </div>

        {/* Social Media */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Share via</h4>
          <div className="grid grid-cols-4 gap-3">
            {/* WhatsApp */}
            <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-all group">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <FaWhatsapp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-600">WhatsApp</span>
            </button>

            {/* Email */}
            <button className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-xl transition-all group">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MdOutlineEmail className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs text-gray-600">Email</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
