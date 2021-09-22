import React from "react";

import Chips from "./Chips";
import Candy from "./Candy";
import Soda from "./Soda";
import VendingMachine from "./VendingMachine";
import Navbar from "./Navbar";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>

        <Route exact path="/">
          <VendingMachine />
        </Route>
       

      </BrowserRouter>
    </div>
  );
}   

export default App;
