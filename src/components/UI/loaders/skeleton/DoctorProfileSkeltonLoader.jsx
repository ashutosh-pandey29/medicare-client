import React from "react";

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
);

export const DoctorProfileSkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-full mx-auto">
        {/* ===== Profile Header Skeleton ===== */}
        <div className="bg-white shadow rounded p-8 mb-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Profile Image */}
            <Skeleton className="w-32 h-32 rounded-full" />

            {/* Basic Info */}
            <div className="flex-1 space-y-3">
              <Skeleton className="h-7 w-64" />
              <Skeleton className="h-5 w-48" />

              <div className="flex gap-3 mt-4">
                <Skeleton className="h-10 w-44 rounded-lg" />
                <Skeleton className="h-10 w-32 rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== Main Grid ===== */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* ===== Left Column ===== */}
          <div className="md:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white shadow rounded p-6 space-y-3">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Education */}
            <div className="bg-white shadow rounded p-6 space-y-4">
              <Skeleton className="h-6 w-64" />

              <div className="flex gap-4">
                <Skeleton className="w-12 h-12 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-40" />
                  <Skeleton className="h-3 w-56" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>

              <div className="flex gap-4">
                <Skeleton className="w-12 h-12 rounded-lg" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-44" />
                  <Skeleton className="h-3 w-52" />
                  <Skeleton className="h-3 w-36" />
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white shadow rounded p-6 space-y-4">
              <Skeleton className="h-6 w-52" />

              <Skeleton className="h-14 w-full rounded-lg" />
              <Skeleton className="h-14 w-full rounded-lg" />
              <Skeleton className="h-14 w-full rounded-lg" />
            </div>
          </div>

          {/* ===== Right Column ===== */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white shadow rounded p-6 space-y-4">
              <Skeleton className="h-6 w-40" />

              <div className="flex gap-3">
                <Skeleton className="w-10 h-10 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>

              <div className="flex gap-3">
                <Skeleton className="w-10 h-10 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-4 w-44" />
                </div>
              </div>

              <div className="flex gap-3">
                <Skeleton className="w-10 h-10 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="h-4 w-36" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
