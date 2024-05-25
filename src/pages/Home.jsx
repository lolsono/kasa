import DecorativeImage from "../components/DecorativeImage.jsx";

import data from "../logements.json";

function CardList() {
  return (
    <div className="cover-card">
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.cover} alt={item.title} />
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
}

function Home() {
  return (
    <div>
      <DecorativeImage />
      <CardList />
    </div>
  );
}

export default Home;
