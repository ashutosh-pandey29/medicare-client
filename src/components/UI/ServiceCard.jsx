export const ServiceCard = ({ service }) => {
  const { service_name, image, description } = service;
  return (
    <>
      <div className="group relative overflow-hidden rounded bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
        {/* Image Wrapper */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={service_name}
            className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors duration-300">
            {service_name}
          </h2>

          <p className="text-slate-600 mt-2 text-sm leading-relaxed line-clamp-3">{description}</p>

          {/* CTA */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-green-600">Learn More →</span>

            {/* <button className="text-sm px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium hover:bg-green-600 hover:text-white transition-all duration-300">
        Book Now
      </button> */}
          </div>
        </div>
      </div>
    </>
  );
};
