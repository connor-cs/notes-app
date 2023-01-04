import React from "react";
import { CFormSwitch } from "@coreui/react";

export default function Header({ setDarkMode }) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <CFormSwitch
        label="Toggle dark mode"
        id="formSwitchCheckDefault"
        onChange={(darkMode) => setDarkMode(!darkMode)}
        // onChange={() => console.log('abc')}
      />
    </div>
  );
}
