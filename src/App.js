import React from "react";
import NotesContainer from "./components/NotesContainer";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "wagmi",
      date: "1/1/2023",
    },
    {
      id: nanoid(),
      text: "formerly chuck's",
      date: "1/1/2023",
    },
    {
      id: nanoid(),
      text: "1k EOY",
      date: "1/1/2023",
    },
    {
      id: nanoid(),
      text: "snack city",
      date: "1/1/2023",
    },
  ]);

  const deleteNote = (id) => {
    notes.filter(note=>note.id!==id)
  }

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toDateString()
    };
    const newNotes = [...notes, newNote]
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesContainer notes={notes} addNote={addNote} deleteNote={deleteNote}/>
    </div>
  );
}
