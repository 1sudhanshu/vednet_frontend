import { Card, CardBody,  Col } from "reactstrap";
import { Chart } from "react-google-charts";
import HeadingCommon from "../../../../Common/HeadingCommon";

interface propsType {
  data: any;
  title: string;
  colClass?: string;
  digit?: string;
}
const PieChartClass = ({ data, title, colClass, digit }: propsType) => {
  return (
      <Col className={colClass ? "col-sm-12" : "col-sm-12 col-xl-6 col-12"}>
        <Card>
          <HeadingCommon Heading={title} H5span={true}  H5spanClassName="digits" H5SpanText={digit} />
          <CardBody className="chart-block">
            <div className="chart-overflow" id="pie-chart1">
              <Chart
                width={data?.width}
                height={data?.height}
                chartType={data?.chartType}
                loader={<div>{"Loading Chart"}</div>}
                data={data?.data}
                options={data?.options}
                rootProps={data?.rootProps}
              />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default PieChartClass;
