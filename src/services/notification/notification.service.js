import api from "../../api/axios";

export const saveSubscriptionService = (subscription) => {
  return api.post("/notification/saveSubscription", { subscription });
};

export const deleteSubscriptionService = (endpoint) => {
  return api.delete("/notification/deleteSubscription", {
    params: {
      endpoint,
    },
  });
};
