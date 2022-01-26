import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system-div">
        <Title headline="Planetas" />
        <section className="planet-section">
          {planets.map((planet) => {
            const { name, image } = planet;
            return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
          })}
        </section>
      </div>
    );
  }
}
export default SolarSystem;
