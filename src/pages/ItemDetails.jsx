import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel.jsx";
import Collapse from "../components/Collapse.jsx";
import Host from "../components/Host.jsx";
import Stars from "../components/Rating.jsx";
import Tags from "../components/Tags.jsx";
import data from "../logements.json";
import ErrorPages404 from "../pages/Error404Page.jsx";

function ItemDetails() {
  const params = useParams();
  const itemId = params.id;

  const found = data.find((element) => element.id === itemId);

  console.log(params);

  if (!found) {
    return <ErrorPages404 />;
  }

  return (
    <div className="detaile-page-container">
      {found && (
        <>
          <Carrousel data={found} />
          <div className="grid-container">
            <div className="title-containner">
              <h2>{found.title}</h2>
              <p>{found.location}</p>
            </div>
            <Tags tags={found.tags} />
            <Stars rating={found.rating} />
            <Host host={found.host} />
          </div>
          <div className="collapse-containner">
            <Collapse title="Description" content={found.description} />
            <Collapse title="Équipements" content={found.equipments} list />
          </div>
        </>
      )}
    </div>
  );
}

export default ItemDetails;
