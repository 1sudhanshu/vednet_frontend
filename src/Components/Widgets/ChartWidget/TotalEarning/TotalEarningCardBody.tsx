import { CardBody } from "reactstrap";
import ChartRow from "./ChartRow";
import DataDisplay from "./DataDisplay";

const TotalEarningCardBody = () => {
  return (
    <div className="bar-chart-widget">
      <div className="top-content bg-primary" />
      <CardBody className="bottom-content">
        <ChartRow />
        <DataDisplay />
      </CardBody>
    </div>
  );
};

export default TotalEarningCardBody;
