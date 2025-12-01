import { Heading } from "../UI/Heading";
import Ct_scan from "../../assets/services-img/ct-scan.jpg";

export const Doctors = () => {
  return (
    <>
      <section className="services">
        <div className="max-w-[1400px] mx-auto border h-auto  ">
          {/* heading  */}
           <Heading
            subHeading={"Meet Our Trusted Experts"}
            mainHeading={"Hands of"}
            name={"MediCare"}
          /> 

         

          <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-20 px-5">

            <div className="card rounded-xl   shadow max-w-sm p-2 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:box-shadow-[0_48px_100px_0_rgba(17,12,46,0.15)]">
              {/* service images */}
              <img src={Ct_scan} alt="image" className="w-full h-[200px] object-cover rounded-xl" />

              {/* services */}
              <div className="card-heading py-3">
                <h2 className="text-3xl font-semibold text-slate-800">card heading </h2>
              </div>

              <p className="p-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum illo unde reiciendis
                delectus nesciunt temporibus doloremque, ea eum minus quasi.
              </p>
            </div>

            <div className="card rounded-xl   shadow bg-amber-100 max-w-sm p-2 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:box-shadow-[0_48px_100px_0_rgba(17,12,46,0.15)]">
              {/* service images */}
              <img src={Ct_scan} alt="image" className="w-full h-[200px] object-cover rounded-xl" />

              {/* services */}
              <div className="card-heading py-3">
                <h2 className="text-3xl font-semibold text-slate-800">card heading </h2>
              </div>

              <p className="p-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum illo unde reiciendis
                delectus nesciunt temporibus doloremque, ea eum minus quasi.
              </p>
            </div>

            <div className="card rounded-xl   shadow bg-amber-100 max-w-sm p-2 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:box-shadow-[0_48px_100px_0_rgba(17,12,46,0.15)]">
              {/* service images */}
              <img src={Ct_scan} alt="image" className="w-full h-[200px] object-cover rounded-xl" />

              {/* services */}
              <div className="card-heading py-3">
                <h2 className="text-3xl font-semibold text-slate-800">card heading </h2>
              </div>

              <p className="p-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum illo unde reiciendis
                delectus nesciunt temporibus doloremque, ea eum minus quasi.
              </p>
            </div>

            <div className="card rounded-xl   shadow bg-amber-100 max-w-sm p-2 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:box-shadow-[0_48px_100px_0_rgba(17,12,46,0.15)]">
              {/* service images */}
              <img src={Ct_scan} alt="image" className="w-full h-[200px] object-cover rounded-xl" />

              {/* services */}
              <div className="card-heading py-3">
                <h2 className="text-3xl font-semibold text-slate-800">card heading </h2>
              </div>

              <p className="p-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum illo unde reiciendis
                delectus nesciunt temporibus doloremque, ea eum minus quasi.
              </p>
            </div>

            <div className="card rounded-xl   shadow bg-amber-100 max-w-sm p-2 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:box-shadow-[0_48px_100px_0_rgba(17,12,46,0.15)]">
              {/* service images */}
              <img src={Ct_scan} alt="image" className="w-full h-[200px] object-cover rounded-xl" />

              {/* services */}
              <div className="card-heading py-3">
                <h2 className="text-3xl font-semibold text-slate-800">card heading </h2>
              </div>

              <p className="p-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum illo unde reiciendis
                delectus nesciunt temporibus doloremque, ea eum minus quasi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
