export const ViewPaymentModel = ({ data }) => {
  return (
    <>
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-gray-700">Payment Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  border-t border-bottom-1 border-blue-200 p-3">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Payment ID</p>
              <p className="text-gray-800">{data.paymentId}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Payment Amount</p>
              <p className="text-gray-800">{data.amount}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <p className="text-gray-600 text-sm font-semibold">method</p>
              <p className="text-gray-800">{data?.method}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <p className="text-gray-600 text-sm font-semibold">Payment Status</p>
              <p className="font-medium text-gray-800">{data?.paymentStatus}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <p className="text-gray-600 text-lg font-semibold border-b border-bottom-1 border-blue-200">
              Payment Purpose
            </p>
            <p className="text-gray-800 ">Payment for Appointment with {data?.doctorName}</p>
          </div>
        </div>
      </div>
    </>
  );
};
