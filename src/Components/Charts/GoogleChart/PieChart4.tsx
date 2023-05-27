import { Card, CardBody, Col } from "reactstrap";
import { RotatingPieChart } from "../../../Constant/index";
import { Chart } from "react-google-charts";
import HeadingCommon from "../../../Common/HeadingCommon";
interface propType {
  data: any;
  pieStartAngle: number;
  pieSliceText: string;
}
const PieChart4Class = ({ data, pieStartAngle, pieSliceText }: propType) => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={RotatingPieChart} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart
              width={data?.width}
              height={data?.height}
              chartType={data?.chartType}
              loader={<div>{"Loading Chart"}</div>}
              data={data?.data}
              options={
                data?.options && { pieStartAngle: pieStartAngle } && {
                  pieSliceText: pieSliceText,
                }
              }
              rootProps={data?.rootProps}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart4Class;
