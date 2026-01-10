// Service Worker registering in react

export const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    return await navigator.serviceWorker.register("/sw.js");
  }
};
