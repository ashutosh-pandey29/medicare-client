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
import { WelcomeCard } from "./WelcomeCard";
// import { NotificationCard } from "../../components/common/dashboard/card/NotificationCard";

export const AdminDashboardHome = () => {
  return (
    <>
      <section className="h-auto border">
        {/* <WelcomeCard adminName="Super Admin" /> */}

        <div className="grid grid-cols-1 md:grid-cols-2 ">
         
          
          

          {/* notification */}
        </div>
      </section>
    </>
  );
};
