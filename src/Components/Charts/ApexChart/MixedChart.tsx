import React, { Fragment } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { MixedChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/HeadingCommon';
import { apexMixedCharts } from '../../../Data/Charts/ApexChart';

const MixedChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='12' className='box-col-12'>
        <Card>
          <HeadingCommon Heading={MixedChart} />
          <CardBody>
            <div id='mixedchart'>
              <Chart options={apexMixedCharts} series={apexMixedCharts.series} type="line" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default MixedChartClass;