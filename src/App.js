import React from "react";
import "./App.css";
import Modal from "./Components/Modal";

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center">Atcivity Tracker</h1>
      <div className="container-sm">
        <Modal />
      </div>
    </div>
  );
};

export default App;
