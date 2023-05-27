import { LI, UL } from "../../../../AbstractElements";
import { Tablenames } from "../../../../Data/Components/HelpdeskDashBoard/CustomerSatisfication";

const PerformanceScoreDetails = () => {
  return (
    <div className="legend-radial d-inline-block">
      <UL className="simple-list">
        {Tablenames.map((name, index) => (
          <LI key={index}>
            <div className={name.ClassName} />
            <span className="f-w-600">{name.Tittle}</span>
          </LI>
        ))}
      </UL>
    </div>
  );
};

export default PerformanceScoreDetails;
