import React from "react";
import NotesContainer from "./components/NotesContainer";
import Search from "./components/Search";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "wagmi",
      date: "1/1/2023",
      category: "personal",
    },
    {
      id: nanoid(),
      text: "leg day",
      date: "1/1/2023",
      category: "fitness",
    },
    {
      id: nanoid(),
      text: "do work tasks",
      date: "1/1/2023",
      category: "work",
    },
  ]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (data) {
      setNotes(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id) => {
    console.log("note id", id);
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const addNote = (text, cat) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toDateString(),
      category: cat,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  return (
    <div className={darkMode ? "dark-mode" : "null"}>
      <div className="container">
        <Header setDarkMode={setDarkMode} />
        <Search setSearch={setSearch} />
        <NotesContainer
          notes={notes.filter((n) => n.text.toLowerCase().includes(search))}
          addNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
