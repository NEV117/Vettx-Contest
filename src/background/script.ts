export function syncFacebook() {
  console.log("Vettx is sync your conversations...");

  setInterval(() => {
    console.log("Sending message to extension...");

    chrome.runtime.sendMessage({
      action: 3,
      payload: `Hi from facebook!`,
    });
  }, 1000);
}
