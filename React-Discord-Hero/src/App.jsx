// src/App.jsx
import './App.css';
import discordLogo from "./assets/discord-logo-white.png"
import menuIcon from "./assets/menu-icon.png"
import backgroundImage from "./assets/discord-background.png"

function App() {
  return (
    <div className="App">
      <nav className="images">
      <img src={discordLogo} className="discord-logo" alt="discord-logo" />
      <img src={menuIcon} className="menu-icon" alt="menu-icon" />
      </nav>
      <h1>imagine a place...</h1>
      <p>Fusce iaculis, neque id convallis iaculis, ante nisl scelerisque turpis, quis porttitor tellus nulla vitae neque. In dictum est ligula, eget fermentum tellus tincidunt at.</p>
      <button className="download">Download for Mac</button>
      <button className="open">Open Discord in your browser</button>
      <img src={backgroundImage} className="background-image" alt="background-image" />
    </div>
  );
}

export default App
