import React from "react";

function Host({ host }) {
  return (
    <div className="host">
      <img src={host.picture} alt={host.name} className="round-image" />
      <h3>{host.name}</h3>
    </div>
  );
}

export default Host;
