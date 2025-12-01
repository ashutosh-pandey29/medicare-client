export const Heading = ({ heading, subText }) => {
  return (
    <>
      <div className="p-2">
         <h2 className="text-xl font-semibold">{heading}</h2>
      <p className="text-gray-500 text-sm">
        {subText}
      </p>
     </div>
    </>
  );
};
