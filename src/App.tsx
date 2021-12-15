import React from "react"
import './App.scss';
import NavBar from "./conponents/NavBar/NavBar";
import TestComponent from "./conponents/TestComponent";

const App = () => {
  return (
    <><NavBar /><div className="container">
      <div className="row justify-content-center">
        <div className="col-md-3 d-flex flex-column text-center">
          <TestComponent />
        </div>
      </div>
    </div></>
  );
}

export default App;
