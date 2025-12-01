export const ServiceCard = ({ service }) => {
  const { service_name, image, description } = service;
  return (
    <>
      <div className="group relative overflow-hidden rounded bg-white shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer p-2 h-auto ">
        {/* image */}
        <img
          src={image}
          alt={image}
          className="w-full h-[200px] object-cover rounded transition-transform duration-500 group-hover:scale-110"
        />

        {/* content */}
        <div className="p-3">
          <h2 className="text-2xl font-bold text-slate-800 group-hover:text-green-600 transition-all duration-300">
            {service_name}
          </h2>

          <p className="text-slate-600 mt-2 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </>
  );
};
