import React, { Fragment } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { ColumnChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/HeadingCommon';
import { apexColumnChartsone } from '../../../Data/Charts/ApexChart';

const ColumnChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon Heading={ColumnChart} />
          <CardBody>
            <div id='column-chart'>
              <Chart options={apexColumnChartsone} series={apexColumnChartsone.series} type="bar" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ColumnChartClass;