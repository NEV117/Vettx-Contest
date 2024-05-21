import { useState } from "react";
import { MessageAction, SyncState } from "../../libs";

const Extension = () => {
  const [syncState, setSyncState] = useState(SyncState.DEFAULT);

  function openTab(payload: string) {
    chrome.runtime.sendMessage({ action: MessageAction.OPEN_TAB, payload });
  }

  const getFacebookTab = async () => {
    const tabs = await chrome.tabs.query({
      url: "https://*.facebook.com/marketplace/*",
    });
    if (tabs.length <= 0) return;
    return tabs[0].id!;
  };

  const handleSyncResponse = (res: any) => {
    if (chrome.runtime.lastError) {
      setSyncState(SyncState.ERROR);
      chrome.action.setIcon({ path: './assets/icon/error-sync/icon-16.png' });
    } else {
      setSyncState(res);
    }
  };

  async function toggleSync(isChecked: boolean) {
    const fbTab = await getFacebookTab();

    if (fbTab) {
      const action = isChecked ? MessageAction.SYNC : MessageAction.UNSYNC;
      chrome.runtime.sendMessage({ action }, handleSyncResponse);
    } else if (!fbTab && isChecked) {
      chrome.action.setIcon({ path: './assets/icon/error-sync/icon-16.png' });
      setSyncState(SyncState.MARKET_NOT_OPEN);
    }
  }

  return (
    <>
      <div className="user-container">
        <h2>Hello James!</h2>

        <div className="checkbox-container">
          <label className={syncState == SyncState.SUCCESSFULL || syncState == SyncState.DEFAULT ? "switch" : "d-none"}>
            <input
              type="checkbox"
              checked={syncState == SyncState.SUCCESSFULL ? true : false}
              onChange={(e) => toggleSync(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
          <label
            className={syncState == SyncState.ERROR ? "class-to-be-added" : "d-none"}
          >
            <span>Icono</span>
          </label>
          <p className={syncState == SyncState.SUCCESSFULL || syncState == SyncState.DEFAULT ? "" : "error-message"}>
            {syncState}
          </p>
        </div>
      </div>

      <div className="buttons-wrapper">
        <div className="buttons-container" id="buttons-container">
          <button 
            className={syncState == SyncState.MARKET_NOT_OPEN ? "error-button" : "primary-button"} 
            onClick={() => openTab("send-fb")}
          >
            Open Facebook Marketplace
          </button>
          <button
            className="secundary-button"
            onClick={() => openTab("send-vt")}
          >
            Open Vettx Marketplace
          </button>
        </div>
      </div>
    </>
  );
};

export default Extension;
