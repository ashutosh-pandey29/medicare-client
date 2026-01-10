import { urlBase64ToUint8Array } from "./vapidHelper";

export const subscribeUser = async () => {
  const registration = await navigator.serviceWorker.ready;

  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(import.meta.env.VITE_VAPID_PUBLIC_KEY),
  });

  // console.log(subscription);

  return subscription;
};
