import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altText = `Planeta ${planetName}`;
    return (
      <div data-testid="planet-card" className="planet-div">
        <p data-testid="planet-name">{ planetName }</p>
        <img className="img-planet" src={ planetImage } alt={ altText } />
      </div>);
  }
}
const { string } = PropTypes;
PlanetCard.propTypes = {
  planetName: string.isRequired,
  planetImage: string.isRequired,
};
export default PlanetCard;
