import { useState } from "react";

const Extension = () => {
  const [userName, setUserName] = useState("no-user");
  const [syncState, setSyncState] = useState("Enable message syncing");

  const handleCheckboxChange = (isChecked: boolean) => {
    if (isChecked) {
      setUserName("James"); 
      setSyncState("Syncing messages");
    } else {
      setUserName("no-user"); 
      setSyncState("Enable message syncing");
    }
  };

  function openTab(message: string) {
    chrome.runtime.sendMessage(message);
  }

  return (
    <>
      <div className="user-container">
        <h2>Hello {userName}!</h2>
        <div className="checkbox-container">
          <label className="switch">
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
          <p>{syncState}</p>
        </div>
      </div>

      <div className="buttons-wrapper">
        <div className="buttons-container" id="buttons-container">
          <button className="primary-button" onClick={() => openTab("send-fb")}>
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
