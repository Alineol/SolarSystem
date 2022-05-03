const PlanetCard = ({ planetName, planetImage }) => {
  const altText = `Planeta ${planetName}`;

  return (
    <div className="planet">
      <p>{ planetName }</p>
      <img src={ planetImage } alt={ altText } />
    </div>
  );
}

export default PlanetCard;
