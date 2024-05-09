const App = () => {
  function openTab(message: string) {
    chrome.runtime.sendMessage(message);
  }

  return (
    <>
      <div className="user-container">
        <h2>Hello James!</h2>
        <div className="checkbox-container">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <p>Enable message syncing</p>
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

export default App;
