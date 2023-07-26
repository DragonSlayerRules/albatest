import React from "react";
import { get } from "../../services/service";

function Clients() {
  return (
    <div className="flex container mx-auto px-4 justify-center">
      <div className="flex">
        {get.getClients.map((unit) => (
          <img src={unit} alt=""></img>
        ))}
      </div>
    </div>
  );
}

export default Clients;
