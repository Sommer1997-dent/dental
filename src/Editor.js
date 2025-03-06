import React, { useState } from "react";

export default function Editor({ textbausteine, updateTextbausteine }) {
  const [titel, setTitel] = useState("");
  const [text, setText] = useState("");
  const [kategorie, setKategorie] = useState("Kons");

  // Neuen Textbaustein speichern
  const handleAdd = () => {
    if (titel && text) {
      const neuerBaustein = { titel, text, kategorie };
      const updatedBausteine = [...textbausteine, neuerBaustein];
      updateTextbausteine(updatedBausteine);
      setTitel("");
      setText("");
    }
  };

  // Textbaustein löschen
  const handleDelete = (index) => {
    const updatedBausteine = textbausteine.filter((_, i) => i !== index);
    updateTextbausteine(updatedBausteine);
  };

  return (
    <div className="container">
      <h1>✏️ Editor</h1>
      <input
        value={titel}
        onChange={(e) => setTitel(e.target.value)}
        placeholder="Titel eingeben..."
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text eingeben..."
      />
      <select value={kategorie} onChange={(e) => setKategorie(e.target.value)}>
        <option value="Kons">🦷 Kons</option>
        <option value="Chirurgie">⚕️ Chirurgie</option>
        <option value="Prothetik">👑 Prothetik</option>
        <option value="Allgemeines">🔍​ Allgemeines</option>{" "}
        {/* Neue Kategorie */}
      </select>
      <button className="add-btn" onClick={handleAdd}>
        ➕ Hinzufügen
      </button>

      <h2>Gespeicherte Bausteine</h2>
      <div className="blocks">
        {textbausteine.map((baustein, index) => (
          <div key={index} className="block">
            <span>{baustein.titel}</span>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
