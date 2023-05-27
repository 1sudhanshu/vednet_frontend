import React, { Fragment } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { PieChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/HeadingCommon';
import { apexPieChart } from '../../../Data/Charts/ApexChart';

const PieChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon Heading={PieChart} />
          <CardBody className="apex-chart">
            <div id='piechart'>
              <Chart options={apexPieChart} series={apexPieChart.series} type="pie" width={380} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default PieChartClass;