import React from "react";
import { useState } from "react";

export default function AddNote({ addNote }) {
  const [text, setText] = useState("");
  const charLimit = 200

  function handleChange(e) {
    if (charLimit - e.target.value.length>=0) {
      setText(e.target.value);
    }
    
  }
  function handleSave() {
    if (text.trim().length > 0) {
      addNote(text);
      setText("");
    } else alert("Note cannot be empty!");
  }

  return (
    <div className="note new" key={"newnote"}>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit-text.length} remaining</small>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
