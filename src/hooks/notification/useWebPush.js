import { useState } from "react";
import { registerServiceWorker } from "../../utils/notifications/registerService.worker";
import { subscribeUser } from "../../utils/notifications/subscribeUser";
import {
  deleteSubscriptionService,
  saveSubscriptionService,
} from "../../services/notification/notification.service";
import { toast } from "react-toastify";
import { unsubscribeUser } from "../../utils/notifications/unSubscribeUser";
export const useWebPush = () => {
  const [loading, setLoading] = useState(false);

  const enableNotification = async () => {
    try {
      setLoading(true);

      if (!("Notification" in window)) {
        toast.error("Your browser does not support notifications");
          setLoading(false);
        return false;
      }

      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        toast("Notifications are blocked", { icon: "🔕" });
        return false;
      }

      const swRegistration = await registerServiceWorker();
      if (!swRegistration) throw new Error("Service Worker registration failed");

      const subscription = await subscribeUser();

      if (!subscription) throw new Error("Subscription failed");

      localStorage.setItem("pushEndpoint", subscription.endpoint);

      const response = await saveSubscriptionService(subscription);

      if (!response.success) {
        throw new Error(response.message || "Can't enable notification try again letter.");
      }

      toast.success("Notifications enabled successfully!");
      return true;
    } catch (err) {
      console.log("notification err", err);
      toast.error("Failed to enable notifications");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const disableNotification = async () => {
    try {
      setLoading(true);

      const endpoint = localStorage.getItem("pushEndpoint");

      if (!endpoint) {
        toast.warn("Notifications already disabled");
        return true;
      }

      // const subscription = await unsubscribeUser();

      await unsubscribeUser();

      console.log(endpoint)
      const response = await deleteSubscriptionService(endpoint);

      if (!response.success) {
        throw new Error(response.message || "notification cant't disabled ");
      }

      localStorage.removeItem("pushEndpoint");
      toast.success(response.message || "Notifications disabled");
      return true;
    } catch (err) {
      console.log(err);
      toast.error("Can't disable notification");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, enableNotification, disableNotification };
};
