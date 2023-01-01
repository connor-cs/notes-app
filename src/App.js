import React from "react";
import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "sneed's feed and seed",
      date: "1/1/2023",
    },
    {
      id: nanoid(),
      text: "formerly chuck's",
      date: "1/1/2023",
    },
    {
      id: nanoid(),
      text: "sergey betray",
      date: "1/1/2023",
    },
    {
      id: nanoid(),
      text: "snack city",
      date: "1/1/2023",
    },
  ]);

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
}
