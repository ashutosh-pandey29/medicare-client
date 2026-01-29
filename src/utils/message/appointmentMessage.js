export const APPOINTMENT_MESSAGE_MAP = {
  waiting: {
    title: "Appointment Pending Approval",
    getMessage: ({ doctorName, appointmentDate }) =>
      `Your appointment with Dr. ${doctorName} is scheduled on ${appointmentDate}. Please wait for confirmation.`,
  },

  confirmed: {
    title: "Appointment Confirmed",
    getMessage: ({ doctorName, appointmentDate }) =>
      `Your appointment with Dr. ${doctorName} is confirmed for ${appointmentDate}. Please arrive 10 minutes early.`,
  },

  missed: {
    title: "Appointment Missed",
    getMessage: ({ doctorName, appointmentDate }) =>
      `You missed your appointment with Dr. ${doctorName} scheduled for ${appointmentDate}. Please rebook if needed.`,
  },

  cancelled: {
    title: "Appointment Cancelled.",
    getMessage: ({ doctorName, appointmentDate }) =>
      `Your appointment with Dr. ${doctorName} scheduled for ${appointmentDate} has been cancelled.`,
  },

  rescheduled: {
    title: "Appointment Rescheduled.",
    getMessage: ({ doctorName, appointmentDate }) =>
      `Your appointment with Dr. ${doctorName} has been rescheduled to ${appointmentDate}. Please check details.`,
  },

  completed: {
    title: "Appointment Completed.",
    getMessage: ({ doctorName, appointmentDate }) =>
      `Your appointment with Dr. ${doctorName} on ${appointmentDate} has been completed.`,
  },

  rejected: {
    title: "Appointment Request Rejected.",
    getMessage: ({ doctorName, appointmentDate }) =>
      `Your appointment request with Dr. ${doctorName} for ${appointmentDate} was rejected. Please try booking another slot.`,
  },

  booked: {
    title: "Appointment Booked",
    getMessage: ({ doctorName, appointmentDate }) =>
      `Your appointment with Dr. ${doctorName} has been successfully booked for ${appointmentDate}.`,
  },
};
