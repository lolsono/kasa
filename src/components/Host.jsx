function Host({ host }) {
  return (
    <div className="host">
      <h3>{host.name}</h3>
      <img src={host.picture} alt={host.name} className="round-image" />
    </div>
  );
}

export default Host;
