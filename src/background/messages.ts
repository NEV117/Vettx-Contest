import { SyncState } from "../libs";
import { syncFacebook } from "./script";

export function onOpenTabAction(payload: string) {
  switch (payload) {
    case "send-fb":
      chrome.tabs.create({ url: "https://www.facebook.com/marketplace/" });
      break;
    case "send-vt":
      chrome.tabs.create({ url: "https://www.vettx.com/" });
      break;
  }
}

export function onSyncAction() {
  chrome.tabs.query(
    { url: "https://*.facebook.com/marketplace/*" },
    function (tabs: chrome.tabs.Tab[]) {
      const fbTab = tabs[0].id!;
      chrome.scripting.executeScript({
        target: { tabId: fbTab, allFrames: false },
        func: syncFacebook,
      });
    }
  );

  chrome.action.setIcon({ path: './assets/icon/sync/icon-16.png' });
  return SyncState.SUCCESSFULL;
}

export function onContentAction(payload: string) {
  console.log("Background got: ", payload);
}
