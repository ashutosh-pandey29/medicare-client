export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    // console.log("block notiiation");
    return false;
  }

  const permission = await Notification.requestPermission();
  return permission === "granted";
};
