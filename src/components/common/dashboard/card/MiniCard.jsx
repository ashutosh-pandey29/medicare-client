export const MiniCard = ({ icon, title, subText }) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-green-500">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-medium">{title}</p>
            <p className="text-2xl font-bold text-green-600 mt-1">{subText}</p>
          </div>
          <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
    </>
  );
};
