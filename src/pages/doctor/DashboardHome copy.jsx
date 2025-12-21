import { MiniCard } from "../../components/common/dashboard/card/MiniCard";
import { FaUsers } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlinePendingActions } from "react-icons/md";
import { BsFilterSquareFill } from "react-icons/bs";

// chart
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import monthlyAppointment from "../../assets/jsonData/monthlyAppointment.json";
import { PatientAnalysisBarChart } from "../../components/charts/PatientAnalysisBarChart";

export const DashboardHome = () => {
  return (
    <>
      <section className="h-auto">
        {/* top section quick card  */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <MiniCard
            icon={<FaUsers className="text-3xl text-blue-500" />}
            title={"10"}
            subText="Today's Appointments"
          />

          <MiniCard
            icon={<MdTimer className="text-3xl text-blue-500" />}
            title={"10"}
            subText="Patients Waiting"
          />

          <MiniCard
            icon={<FaCircleCheck className="text-3xl text-blue-500" />}
            title={"10"}
            subText="Completed Consultations"
          />

          <MiniCard
            icon={<MdOutlinePendingActions className="text-3xl text-blue-500" />}
            title={"10"}
            subText="Pending Reports"
          />
        </div>

        {/* recent activity */}

        <div className="grid grid-cols-1 md:grid-cols-2 mt-5  gap-1">
          {/* resent activity  */}

          <div className="p-0 md:p-3 shadow">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold mb-3">Monthly Appointment Analysis</h2>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyAppointment}>
                <Line type="monotone" dataKey="Appointment" stroke="#4f46e5" strokeWidth={3} />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="shadow">
            {/* barChart */}
            <PatientAnalysisBarChart />
          </div>
        </div>
      </section>
    </>
  );
};
