import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Note({ id, text, date, category, deleteNote }) {
  return (
    <div className={`note ${category}`} key={id}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <small className="cat">{category}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
}
