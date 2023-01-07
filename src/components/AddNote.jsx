import React from "react";
import { useState } from "react";
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from "@coreui/react";

export default function AddNote({ addNote }) {
  const [text, setText] = useState("");
  const [cat, setCat] = useState(null)
  const charLimit = 200

  function handleChange(e) {
    if (charLimit - e.target.value.length >= 0) {
      setText(e.target.value);
    }

  }
  function handleSave() {
    if (text.trim().length > 0) {
      addNote(text, cat);
      setText("");
    } else alert("Note cannot be empty!");
  }

  //get feedback on this
  //e.target is a jsx element wrapped in <a tags so e.target.value is undefined
  // function handleCatSelect(e) {
  //   const category = e.target.getAttribute("value")
  //   setCat(category)
  // }

   function handleCatSelect(e) {
    console.log(e.target.value)
    const noteCat=e.target.value
    setCat(noteCat)
   }

  return (
    <div className="note new" key={"newnote"}>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - text.length} remaining</small>
        {/* <CDropdown >
          <CDropdownToggle color="light" size="sm" className="dropdown">Category</CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem onClick={handleCatSelect} value="work" style={{ color: "blue" }}>Work</CDropdownItem>
            <CDropdownItem onClick={handleCatSelect} value="study" style={{ color: "red" }}>Study</CDropdownItem>
            <CDropdownItem onClick={handleCatSelect} value="fitness" style={{ color: "green" }}>Fitness</CDropdownItem>
            <CDropdownItem onClick={handleCatSelect} value="personal" style={{ color: "purple" }}>Personal</CDropdownItem>
            <CDropdownItem onClick={handleCatSelect} value="other" style={{ color: "black" }}>Other</CDropdownItem>
          </CDropdownMenu>
        </CDropdown > */}

        {/* this only works when something is changed */}
        <select className="dropdown" onChange={handleCatSelect}>
          <option value="work" style={{ color: "blue" }}>Work</option>
          <option value="study" style={{ color: "red" }}>Study</option>
          <option value="fitness" style={{ color: "green" }}>Fitness</option>
          <option value="personal" style={{ color: "purple" }}>Personal</option>
          <option value="other" style={{ color: "black" }}>Other</option>
        </select>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
