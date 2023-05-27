import React from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import { LineChart } from '../../../Constant/index';
import { Line } from 'react-chartjs-2';
import HeadingCommon from '../../../Common/HeadingCommon';
import { lineChartData, lineChartOptions } from '../../../Data/Charts/ChartJsData';

const LineChartClass = () => {
  return (
    <Col xl="6" md="12" className='box-col-12' >
      <Card>
        <HeadingCommon Heading={LineChart} />
        <CardBody className="chart-block">
          <Line data={lineChartData} options={lineChartOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChartClass;