import { Card, CardBody, Col, CardHeader } from 'reactstrap';
import { TasksHeading } from "../../../../../Constant";
import ReactApexChart from "react-apexcharts";
import { circleChartoptions } from "../../../../../Data/DashBoard/Enterprise/project-overview/ChartData";
import { H5 } from '../../../../../AbstractElements';

const Tasks = () => {
  return (
    <Col xl="5" className=" box-col-6">
      <Card className=" card-with-border">
        <CardHeader className="card-no-border">
          <H5>{TasksHeading}</H5>
        </CardHeader>
        <CardBody className=" pt-0 o-hidden">
          <div className="apex-circle">
            <ReactApexChart id="circlechart" options={circleChartoptions} series={circleChartoptions.series} type="radialBar" height={370}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Tasks;
