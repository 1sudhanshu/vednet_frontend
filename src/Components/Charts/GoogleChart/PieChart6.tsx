import { Card, CardBody,  Col } from "reactstrap";
import { RotatingPieChart } from "../../../Constant/index";
import { Chart } from "react-google-charts";
import { PieChart6Data, PieChart6option } from "../../../Data/Charts/ChartData";
import HeadingCommon from "../../../Common/HeadingCommon";
interface propsType {
  data: any;
}
const PieChart5Class = ({ data }: propsType) => {
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={RotatingPieChart} H5span={true} H5spanClassName="digits" H5SpanText={"2"}/>
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart
              width={data?.width}
              height={data?.height}
              chartType={data?.chartType}
              loader={<div>{"Loading Chart"}</div>}
              data={PieChart6Data}
              options={PieChart6option}
              rootProps={data?.rootProps}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart5Class;