import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";


export default function NotesContainer({ notes, addNote, deleteNote, filteredCat, search }) {
  
  function renderNotes(notesArr){
    return (
      <div className="notes-list">
        {notesArr.map((note) => {
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
  
  if (filteredCat && search) {
    const catAndSearch = notes.filter(note => (note.category === filteredCat) && (note.text.toLowerCase().includes(search)))
    return renderNotes(catAndSearch)
  }
  else if (filteredCat) {
    const notesByCat = notes.filter(note => note.category === filteredCat)
    return renderNotes(notesByCat)
  }
  else if (search) {
    const notesBySearchTerm = notes.filter(note => note.text.toLowerCase().includes(search))
    return renderNotes(notesBySearchTerm)
  }
  else return (
    renderNotes(notes)
  );
}
