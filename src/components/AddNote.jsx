import React from "react";
import { useState } from "react";

export default function AddNote({addNote}) {

  const [text, setText] = useState('')

  function handleChange(e) {
    setText(e.target.value)
  }
  function handleSave() {
    addNote(text)
    setText('')
  }

  return (
    <div className="note new" key={'newnote'}>
      <textarea 
        rows="8" 
        cols="10" 
        placeholder="Type to add a note..."
        value={text}
        onChange={handleChange}>
        </textarea>
      <div className="note-footer">
        <small>200 remaining</small>
        <button className="save" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
