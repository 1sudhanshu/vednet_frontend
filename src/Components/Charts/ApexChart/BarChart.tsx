import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { BarChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/HeadingCommon';
import { apexBarChart } from '../../../Data/Charts/ApexChart';

const BarChartClass = () => {
  return (
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon Heading={BarChart} />
          <CardBody>
            <div id='basic-bar'>
              <Chart options={apexBarChart} series={apexBarChart.series} type="bar" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default BarChartClass;