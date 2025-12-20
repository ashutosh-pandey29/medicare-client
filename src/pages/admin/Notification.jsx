import React from "react";
// import { NotificationCard } from "../../components/common/dashboard/card/NotificationCard";
import { Heading } from "../../components/UI/Dashboard/Heading";

export const Notification = () => {
  return (
    <>
      <section>
        {/* heading */}
        <div className="border-b border-b-zinc-100">
          <Heading
            heading="Notification Management"
            subText="Monitor real-time notifications and take quick actions on pending approvals, appointments, and system updates."
          />
        </div>

        {/* <NotificationCard/>  */}
      </section>
    </>
  );
};

