export const PreLoader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="flex-col gap-4 flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent text-blue-400 animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-red-400 animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
        </div>
      </div>
    </div>

  );
};
