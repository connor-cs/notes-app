import React from "react";
import NotesList from "./components/NotesList";
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
      <NotesList notes={notes} addNote={addNote} />
    </div>
  );
}
