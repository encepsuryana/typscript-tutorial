import React from "react";
import logo from "./logo.svg";
import "./App.css";

//import component
import ClassComp from "./classComponent";
import FuncComp from "./funcComponent";

function App() {
  return (
    <div className="App">
      {/* <ClassComp namaHalaman="class" title="Class Component" /> */}
      <FuncComp title="Func Component"></FuncComp>
    </div>
  );
}

export default App;
