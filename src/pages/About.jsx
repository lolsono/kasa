import Collapse from "../components/Collapse.jsx";
function About() {
  return (
    <div className="about-container">
      <img
        src="../src/assets/picture/Image-source-2.png"
        alt="Image des montages avec un lac"
      />
      <Collapse title="Fiabilité" content="Ceci est le contenu 1" />
      <Collapse title="Respect" content="Ceci est le contenu 2" />
      <Collapse title="Service" content="Ceci est le contenu 3" />
      <Collapse title="Sécurité" content="Ceci est le contenu 3" />
    </div>
  );
}

export default About;
