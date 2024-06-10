import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Carrousel({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    setCurrentIndex(
      (currentIndex + data.pictures.length - 1) % data.pictures.length
    );
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % data.pictures.length);
  };

  return (
    <div className="carrousel-container">
      <img src={data.pictures[currentIndex]} alt={data.title} />
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={previous}
        className="fleche-gauche"
      />
      <FontAwesomeIcon
        icon={faChevronRight}
        onClick={next}
        className="fleche-droite"
      />
      <div className="compteur-container">
        <p className="compteur">
          {currentIndex + 1}/{data.pictures.length}
        </p>
      </div>
    </div>
  );
}

export default Carrousel;
