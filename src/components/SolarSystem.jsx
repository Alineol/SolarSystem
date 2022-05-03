import planets from '../data/planets';
import PlanetCard from './PlanetCard';

const SolarSystem = () => {
  return (
    <div className="solar-system">
      <h2>Planetas</h2>

      <section className="planets">

        { planets.map((planet) => {
          const { name, image } = planet;
          
          return <PlanetCard key={ name } planetName={ name } planetImage={ image } />;
        }) }

      </section>
    </div>
  );
}

export default SolarSystem;