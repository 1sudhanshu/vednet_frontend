import { Fragment } from "react";
import { H4, H6 } from "../../../AbstractElements";
import { Card, CardBody, Col } from "reactstrap";
import { FirstRowDatas } from "../../../Data/widgets/Chart/FirstRow";
import ReactApexChart from "react-apexcharts";

const FirstRow = () => {
  return (
    <Fragment>
      {FirstRowDatas.map((data, index) => (
        <Col key={index} xl="4" md="12" className="box-col-12">
          <Card className="o-hidden">
            <div className="chart-widget-top">
              <CardBody className="row">
                <Col xs="5">
                  <H6 className="f-w-600 font-primary">{data.heading}</H6>
                  <span className="num">
                    <span className="counter">{data.number}</span>%{data.icon}
                  </span>
                </Col>
                <Col xs="7" className="text-end">
                  <H4 className="num total-value">
                    $ <span className="counter">{data.amount}</span>
                    {data?.subAmount}
                  </H4>
                </Col>
              </CardBody>
              <div>
                <ReactApexChart options={data.option} series={data.series} id={data.id} type="area" height={170} />
                <div />
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default FirstRow;
