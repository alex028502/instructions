self.addEventListener('push', function(event) {
  event.waitUntil(
    self.registration.showNotification("TEST", {
      body: "test message",
      icon: "./favicon.ico",
    })
  );
});
