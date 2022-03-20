import React from "react";
import logo from "./logo.svg";
import "./App.css";

//import component
import ClassComp from "./classComponent";
import FuncComp from "./funcComponent";
import FetchAPI from "./fetchAPI";

function App() {
  return (
    <div className="App">
      {/* <ClassComp namaHalaman="class" title="Class Component" /> */}
      {/* <FuncComp title="Func Component"></FuncComp> */}

      <FetchAPI title="Fetch API" />
    </div>
  );
}

export default App;
