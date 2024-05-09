import './App.css'
import VettxLogo from "./assets/logo.png";

function App() {

  async function sendToFacebookMarket() {
    const [tab] = await chrome.tabs.query({ active: true });
    
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        alert("Sending to fb market...");
      }
    });
  }

  async function sendToVettxMarket() {
    const [tab] = await chrome.tabs.query({ active: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        alert("Sending to vettx market...");
      }
    });
  }

  return (
    <>
      <img src={VettxLogo} alt="Vettx's Logo" />
      <div className="user-container">
        <h2>Hello James!</h2>
        <input type="radio" />
        Enable message syncing
      </div>

      <div className="buttons-container" id="buttons-container">
        <button onClick={() => sendToFacebookMarket()}>Open Facebook Marketplace</button>
        <button onClick={() => sendToVettxMarket()}>Open Vettx Marketplace</button>
      </div>
    </>
  )
}

export default App
