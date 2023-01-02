import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

export default function NotesList({ notes, addNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <Note key={note.id} text={note.text} date={note.date} />;
      })}
      <AddNote addNote={addNote} />
    </div>
  );
}
