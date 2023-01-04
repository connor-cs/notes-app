import React from "react";
import NotesContainer from "./components/NotesContainer";
import Search from "./components/Search";
import Header from "./components/Header";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [search, setSearch] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "wagmi",
      date: "1/1/2023",
    },
    {
      id: nanoid(),
      text: "note text",
      date: "1/1/2023",
    },
    {
      id: nanoid(),
      text: "1k EOY",
      date: "1/1/2023",
    },
  ]);
  

  const deleteNote = (id) => {
    console.log(id);
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Header />
      <Search setSearch={setSearch}/>
      <NotesContainer notes={notes} addNote={addNote} deleteNote={deleteNote} />
    </div>
  );
}
