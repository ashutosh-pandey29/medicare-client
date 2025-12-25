export const Heading = ({ subHeading, mainHeading, name = "" }) => {
  return (
    <>
     <div className="heading text-center mt-10">
            {/* sub hading  */}
            <span className="text-green-500 font-semibold uppercase tracking-wider text-sm md:text-base">
          { subHeading}
            </span>

            {/* Main Heading */}
            <h1 className="text-2xl md:text-6xl font-extrabold text-slate-800">
          {mainHeading} <span className="text-green-600">{name}</span>
            </h1>

        

            {/* Underline */}
            <div className="w-24 h-1 bg-orange-400 mx-auto rounded-full mt-2"></div>
          </div>
    </>
  )
}