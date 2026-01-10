self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {};

  const options = {
    body: data.body,
    icon: "/assets/logo-icons/hospitalLogo.png",
    badge: "assets/logo-icons/notificationBell.png",
    vibrate: [200, 100, 200],
    data: {
      url: data.url || "/",
    },
  };

  event.waitUntil(self.registration.showNotification(data.title || "Medicare Hospital", options));
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();

  event.waitUntil(clients.openWindow(event.notification.data.url));
});
