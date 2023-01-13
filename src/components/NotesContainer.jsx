import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

//refactor this to get rid of repetition
export default function NotesContainer({ notes, addNote, deleteNote, filteredCat, search }) {
  
  if (filteredCat) {
    const notesByCat = notes.filter(note => note.category === filteredCat)
    console.log('notesbycat', notesByCat)
    return (
      <div className="notes-list">
        {notesByCat.map((note) => {
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
  else if (search) {
    const notesBySearchTerm = notes.filter(note => note.text.toLowerCase().includes(search))
    return (
      <div className="notes-list">
        {notesBySearchTerm.map((note) => {
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

  else return (
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
