export const AdminDoctorProfileSkeletonLoader = () => {
  return (
    <div className="min-h-screen bg-gray-900 rounded-lg p-5 animate-pulse">
      {/* Back button */}
      <div className="h-4 w-32 bg-gray-700 rounded mb-6" />

      <div className="bg-gray-800 border border-gray-800 rounded-xl shadow-lg">
        {/* Header */}
        <div className="px-4 py-6 border-b border-gray-700 flex justify-between items-center">
          <div className="space-y-2">
            <div className="h-6 w-48 bg-gray-700 rounded" />
            <div className="h-4 w-32 bg-gray-700 rounded" />
          </div>

          <div className="h-6 w-28 bg-gray-700 rounded-full" />
        </div>

        {/* Content */}
        <div className="p-4 grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div>
            <div className="h-5 w-40 bg-gray-700 rounded mb-4" />

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 space-y-4">
              <div className="h-4 w-40 bg-gray-700 rounded" />
              <div className="h-4 w-52 bg-gray-700 rounded" />
              <div className="h-4 w-64 bg-gray-700 rounded" />
              <div className="h-4 w-48 bg-gray-700 rounded" />
            </div>

            <div className="mt-6">
              <div className="h-5 w-32 bg-gray-700 rounded mb-4" />
              <div className="h-20 bg-gray-800 rounded" />
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="h-5 w-40 bg-gray-700 rounded mb-4" />

            {[1, 2].map((i) => (
              <div
                key={i}
                className="mb-4 bg-gray-900 border border-gray-800 rounded-lg p-4 space-y-2"
              >
                <div className="h-4 w-24 bg-gray-700 rounded" />
                <div className="h-4 w-40 bg-gray-700 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="px-8 py-6 border-t border-gray-800 flex justify-end">
          <div className="h-9 w-36 bg-gray-700 rounded" />
        </div>
      </div>
    </div>
  );
};
