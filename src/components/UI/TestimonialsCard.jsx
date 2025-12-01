import { IoIosStar } from "react-icons/io";

export const TestimonialsCard = ({ testimonial }) => {
  return (
    <>
      <div className="card  shadow p-5 rounded transition-transform duration-300 hover:-translate-y-2 hover:box-shadow-[0_48px_100px_0_rgba(17,12,46,0.15)] h-auto min-h-fit">
        <div className="flex  justify-start items-center gap-5">
          <div className="profile">
            <img
              src={testimonial.image}
              alt="profile-img"
              className="rounded-full w-10 h-10 outline-1 outline-orange-400  outline-offset-2"
            />
          </div>
          <div className="name-and-star flex flex-col  ">
            <span className="text-xl text-slate-800">{testimonial.name}</span>
            <span className="star text-yellow-400 flex">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <IoIosStar key={i} />
              ))}
            </span>
          </div>
        </div>

        <div className="content py-3">{testimonial.text}</div>
      </div>
    </>
  );
};
