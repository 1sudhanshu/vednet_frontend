import { Card, CardBody,  Col } from "reactstrap";
import { RotatingPieChart } from "../../../Constant/index";
import { Chart } from "react-google-charts";
import HeadingCommon from "../../../Common/HeadingCommon";
interface propsType {
  data: any;
}
const PieChart5Class = ({ data }: propsType) => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading={RotatingPieChart} H5span={true} H5spanClassName="digits" H5SpanText={"2"}/>
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart
              width={data?.width}
              height={data?.height}
              chartType={data?.chartType}
              loader={<div>{"Loading Chart"}</div>}
              data={data?.data}
              options={{
                title: "Indian Language Use",
                legend: "none",
                pieSliceText: "label",
                colors: [
                  "#655af3",
                  "#51bb25",
                  "#fb740d",
                  "#fd2e64",
                  "#a927f9",
                  "#fd2e64",
                  "#51bb25",
                  "#a927f9",
                  "#fb740d",
                  "#ff5f24",
                  "#6362e7",
                  "#51bb25",
                  "#a927f9",
                  "#51bb25",
                  "#6362e7",
                  "#51bb25",
                  "#a927f9",
                  "#fb740d",
                  "#a927f9",
                  "#148df6",
                  "#6362e7",
                  "#ff5f24",
                ],
                slices: {
                  4: { offset: 0.2 },
                  12: { offset: 0.3 },
                  14: { offset: 0.4 },
                  15: { offset: 0.5 },
                },
              }}
              rootProps={data?.rootProps}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieChart5Class;
