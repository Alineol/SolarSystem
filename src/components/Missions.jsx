import MissionCard from './MissionCard';
import missions from '../data/missions';

const Missions = () => {
  return (
    <div className="missions">
      <h2>Missões</h2>
      <section className="missions-section">
        {missions.map((mission) => {
          const { name, year, country, destination } = mission;
          return (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          );
        })}
      </section>
    </div>
  );
}
 
export default Missions;
