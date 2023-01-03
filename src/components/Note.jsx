import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function Note({ id, text, date, deleteNote }) {
  return (
    <div className="note" key={id}>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
}
