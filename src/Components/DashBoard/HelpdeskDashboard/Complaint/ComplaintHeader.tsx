import { Bar } from "react-chartjs-2";
import { CardHeader } from "reactstrap";
import { ComplaintChartData, ComplaintChartOptions } from "../../../../Data/Components/HelpdeskDashBoard/ComplaintChart";
import { H4, H5, P } from "../../../../AbstractElements";

const ComplaintHeader = () => {
  return (
    <CardHeader className=" card-no-border chart-block">
      <div className="d-flex">
        <div className="small-bar">
          <div className="small-chart  flot-chart-container">
            <Bar
              height={190}
              options={ComplaintChartOptions}
              data={ComplaintChartData}
            />
          </div>
        </div>
        <div className="flex-grow-1">
          <H5>Resolved Complaint</H5>
          <P className="f-12">
          Give thought to the client's complaint and issues and offer a workable.....
          </P>
          <H4 className="mb-0">
            5m:65s
            <span className="f-14 light-font"> / Goal : 8m : 0s</span>
          </H4>
        </div>
      </div>
    </CardHeader>
  );
};
export default ComplaintHeader;