export const MiniCard = ({ icon ,  title  ,  subText}) => {
  return (
    <>
      <div className="bg-white rounded-sm shadow-md p-4 sm:p-5 flex items-center flex-col md:flex-row gap-4 hover:shadow-lg transition">
       {icon}
        <div>
          <h2 className="text-[13px] sm:text-4xl font-semibold">{title}</h2>
          <p className="text-[10px] sm:text-sm text-slate-600">{subText}</p>
        </div>
      </div>
    </>
  );
};
