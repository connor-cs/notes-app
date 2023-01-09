import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

export default function NotesContainer({ notes, addNote, deleteNote }) {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            category={note.category}
            deleteNote={deleteNote}
          />
        );
      })}
      <AddNote addNote={addNote} />
    </div>
  );
}
