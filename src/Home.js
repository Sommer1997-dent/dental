import React, { useState } from "react";

export default function Home({ textbausteine }) {
  const [eingefügterText, setEingefügterText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Kons");

  // Textbaustein ins Feld einfügen
  const handleClick = (text) => {
    setEingefügterText((prev) => prev + (prev ? " " : "") + text);
  };

  // Filtere die Textbausteine basierend auf der Kategorie
  const filteredBausteine = textbausteine.filter(
    (baustein) => baustein.kategorie === selectedCategory
  );

  return (
    <div className="container">
      <h1>🦷 Zahnmedizinische Textbausteine</h1>
      <p>Wähle eine Kategorie aus:</p>

      {/* Kategorieauswahl */}
      <div className="categories">
        <button
          className={selectedCategory === "Kons" ? "selected" : ""}
          onClick={() => setSelectedCategory("Kons")}
        >
          🦷 Kons
        </button>
        <button
          className={selectedCategory === "Chirurgie" ? "selected" : ""}
          onClick={() => setSelectedCategory("Chirurgie")}
        >
          ⚕️ Chirurgie
        </button>
        <button
          className={selectedCategory === "Prothetik" ? "selected" : ""}
          onClick={() => setSelectedCategory("Prothetik")}
        >
          👑 Prothetik
        </button>
        <button
          className={selectedCategory === "Allgemeines" ? "selected" : ""}
          onClick={() => setSelectedCategory("Allgemeines")}
        >
          🔍​ Allgemeines
        </button>{" "}
        {/* Neue Kategorie */}
      </div>

      <p>Wähle einen Baustein aus, um ihn hinzuzufügen:</p>

      <div className="blocks">
        {filteredBausteine.map((baustein, index) => (
          <button
            key={index}
            className="block-btn"
            onClick={() => handleClick(baustein.text)}
          >
            {baustein.kategorie === "Kons"
              ? "🦷"
              : baustein.kategorie === "Chirurgie"
              ? "⚕️"
              : baustein.kategorie === "Prothetik"
              ? "👑"
              : "🔍​"}{" "}
            {/* Neue Kategorie */}
            {baustein.titel}
          </button>
        ))}
      </div>

      {/* Bearbeitbares Textfeld */}
      <textarea
        value={eingefügterText}
        onChange={(e) => setEingefügterText(e.target.value)} // Ermöglicht das Bearbeiten
        placeholder="Dein zusammengesetzter Text..."
      />
    </div>
  );
}
