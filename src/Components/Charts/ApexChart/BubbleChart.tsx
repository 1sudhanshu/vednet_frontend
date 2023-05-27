import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { BubbleChart } from '../../../Constant/index';
import Chart from 'react-apexcharts';
import HeadingCommon from '../../../Common/HeadingCommon';
import { apex3DbubbleCharts } from '../../../Data/Charts/ApexChart';

const BubbleChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='6' className='box-col-12'>
        <Card>
          <HeadingCommon Heading={BubbleChart} />
          <CardBody>
            <div id='chart-bubble'>
              <Chart options={apex3DbubbleCharts} series={apex3DbubbleCharts.series} type="bubble" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BubbleChartClass;