import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Editor from "./Editor";

export default function App() {
  const [textbausteine, setTextbausteine] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const correctPassword = "Sommer1997"; // Ändere das zu deinem gewünschten Passwort

  // Lade gespeicherte Textbausteine beim Start
  useEffect(() => {
    const savedBausteine =
      JSON.parse(localStorage.getItem("textbausteine")) || [];
    setTextbausteine(savedBausteine);
  }, []);

  // Speichere Textbausteine in LocalStorage
  const updateTextbausteine = (newBausteine) => {
    setTextbausteine(newBausteine);
    localStorage.setItem("textbausteine", JSON.stringify(newBausteine));
  };

  // Passwortprüfung
  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Falsches Passwort! Versuch es erneut.");
      setPassword(""); // Eingabe zurücksetzen
    }
  };

  return (
    <div className="app-container">
      {!isAuthenticated ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h2>Passwortgeschützte Seite</h2>
          <input
            type="password"
            placeholder="Passwort eingeben"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <Router>
          <nav>
            <Link to="/">🏠 Home</Link>
            <Link to="/editor">✏️ Editor</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home textbausteine={textbausteine} />} />
            <Route
              path="/editor"
              element={
                <Editor
                  textbausteine={textbausteine}
                  updateTextbausteine={updateTextbausteine}
                />
              }
            />
          </Routes>
        </Router>
      )}
    </div>
  );
}
