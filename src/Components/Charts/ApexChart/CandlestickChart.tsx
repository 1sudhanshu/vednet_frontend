import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { CandlestickChart } from '../../../Constant/index';
import Chart from 'react-apexcharts';
import HeadingCommon from '../../../Common/HeadingCommon';
import { apexCandleStickCharts } from '../../../Data/Charts/ApexChart';

const CandlestickChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='12' className='box-col-12'>
        <Card>
          <HeadingCommon Heading={CandlestickChart} />
          <CardBody >
            <div id='candlestick'>
              <Chart options={apexCandleStickCharts} series={apexCandleStickCharts.series} type="candlestick" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default CandlestickChartClass;