import React, { Fragment } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { DonutChart } from '../../../Constant/index';
import Chart from 'react-apexcharts';
import HeadingCommon from '../../../Common/HeadingCommon';
import { apexDonutCharts } from '../../../Data/Charts/ApexChart';

const DonutChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon Heading={DonutChart} />
          <CardBody className="apex-chart">
            <div id='donutchart'>
              <Chart options={apexDonutCharts} series={apexDonutCharts.series} type="donut" />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default DonutChartClass;