import React from "react";
import { NavLink } from "react-router-dom";
import "./VendingMachine.css";
import vendingMachinePng from "./SV-Evolution-40-1-min.png"

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <NavLink exact to="soda" className="VendingMachine-link soda-link">
        Soda
      </NavLink>
      <NavLink exact to="/candy" className="VendingMachine-link candy-link">
        Candy
      </NavLink>
      <NavLink exact to="/chips" className="VendingMachine-link chips-link">
        Chips
      </NavLink>
      <div className="VendingMachine-image-container">
        <img className="VendingMachine-image" src={vendingMachinePng} />
      </div>

    </div>
  );
}

export default VendingMachine;
