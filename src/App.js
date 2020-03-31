import React from "react";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/men/70.jpg"
        name="Arnold Robinson"
        online
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/96.jpg"
        name="Kristen Alvarez"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/27.jpg"
        name="Suzanne Davidson"
        online
      />
    </div>
  );
}

export default App;
