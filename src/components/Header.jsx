import React from "react";
import { CFormSwitch } from "@coreui/react";

export default function Header({ setDarkMode, refresh }) {

  return (
    <div className="header">
      <h1>Notes</h1>
      <CFormSwitch
        className="toggle"
        label="Toggle dark mode"
        id="formSwitchCheckDefault"
        onChange={(e) => setDarkMode(e.target.checked)}
      />
    </div>
  );
}
