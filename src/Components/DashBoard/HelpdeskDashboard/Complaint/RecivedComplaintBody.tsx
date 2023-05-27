import { CardBody } from "reactstrap";
import { H4, P } from "../../../../AbstractElements";
import ReactApexChart from "react-apexcharts";
import { apexComplain } from "../../../../Data/Components/HelpdeskDashBoard/ChartData";

const RecivedComplaintBody = () => {
  return (
    <CardBody className=" p-0">
      <div className="complain-details">
        <H4>
          <span> This Week </span>
          <span className="font-primary">
            3.56% <i className="fa fa-caret-up" />
          </span>
          198
        </H4>
        <P className="f-12">
          The total number of complaints that have been received.
        </P>
      </div>
      <div className="apex-complain">
        <div id="complai1n">
          <ReactApexChart
            options={apexComplain}
            series={apexComplain.series}
            type="area"
          />
        </div>
      </div>
    </CardBody>
  );
};

export default RecivedComplaintBody;
