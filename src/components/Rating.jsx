import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Stars({ rating }) {
  const stars = [];

  // Ajouter les étoiles pleines
  for (let i = 0; i < rating; i++) {
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#FF6060" }} />
    );
  }

  // Ajouter des étoiles vides pour compléter jusqu'à 5 étoiles
  for (let i = rating; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#E3E3E3" }} />
    );
  }

  return <div className="stars-containner">{stars}</div>;
}

export default Stars;
