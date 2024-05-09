const App = () => {

    function openTab(message: string) {
        chrome.runtime.sendMessage(message);
    }

    return (
        <>
            <div className="user-container">
                <h2>Hello James!</h2>
                <input type="radio" />
                Enable message syncing
            </div>

            <div className="buttons-container" id="buttons-container">
                <button onClick={() => openTab("send-fb")}>Open Facebook Marketplace</button>
                <button onClick={() => openTab("send-vt")}>Open Vettx Marketplace</button>
            </div>
        </>
    )
}

export default App;