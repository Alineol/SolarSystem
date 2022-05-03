const MissionCard = ({ name, year, country, destination }) => {
  return (
    <div className="mission">
      <h2>{ name }</h2>
      <p>{year}</p>
      <p>{country}</p>
      <p>{destination}</p>
    </div>
  )
}

export default MissionCard;