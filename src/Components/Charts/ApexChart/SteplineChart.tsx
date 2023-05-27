import React, { Fragment } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { SteplineChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/HeadingCommon';
import { apexSteplineChart } from '../../../Data/Charts/ApexChart';

const SteplineChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='6' className='box-col-12'>
        <Card>
          <HeadingCommon Heading={SteplineChart} />
          <CardBody>
            <div id='stepline'>
              <Chart options={apexSteplineChart} series={apexSteplineChart.series} type="line" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default SteplineChartClass;