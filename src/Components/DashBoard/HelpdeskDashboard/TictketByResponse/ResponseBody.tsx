import ReactApexChart from "react-apexcharts";
import { CardBody } from "reactstrap";
import { TictketOptions1 } from "../../../../Data/Components/HelpdeskDashBoard/ChartData";
import { Bar } from "react-chartjs-2";
import {
  TicketDataDetails,
  TicketDataOptions,
} from "../../../../Data/Components/HelpdeskDashBoard/TicketData";

const ResponseBody = () => {
  return (
    <CardBody className=" p-0">
      <div style={{ position: "relative" }} className="apex- complain">
        <div id="mix1">
          <ReactApexChart
            options={TictketOptions1}
            series={TictketOptions1.series}
            type="area"
          />
        </div>
      </div>
      <div className="small-mix">
        <Bar height={50} options={TicketDataOptions} data={TicketDataDetails} />
      </div>
    </CardBody>
  );
};

export default ResponseBody;
