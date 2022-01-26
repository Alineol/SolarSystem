import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-div">
        <p data-testid="mission-name" className="p-mission-title">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>);
  }
}
const { string } = PropTypes;
MissionCard.propTypes = {
  name: string.isRequired,
  country: string.isRequired,
  year: string.isRequired,
  destination: string.isRequired,
};
export default MissionCard;
