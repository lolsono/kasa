import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse.jsx";
import Tags from "../components/Tags.jsx";
import data from "../logements.json";

function ItemDetails() {
  const params = useParams();
  const itemId = params.id;

  const found = data.find((element) => element.id === itemId);
  console.log(found);

  return (
    <div className="detaile-page-container">
      {found && (
        <>
          <img src={found.cover} alt={found.title} />
          <h2>{found.title}</h2>
          <p>{found.location}</p>
          <Tags tags={found.tags} />
          <Collapse title="Description" content={found.description} />
          <Collapse title="Équipements" content={found.equipments} />
        </>
      )}
    </div>
  );
}

export default ItemDetails;
