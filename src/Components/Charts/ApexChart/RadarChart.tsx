import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { RadarChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/HeadingCommon';
import { apexRadarPolygonfillCharts } from '../../../Data/Charts/ApexChart';

const RadarChartClass = () => {
  return (
      <Col sm='12' xl="6" className='box-col-6'>
        <Card>
          <HeadingCommon Heading={RadarChart} />
          <CardBody>
            <div id='radarchart'>
              <Chart options={apexRadarPolygonfillCharts} series={apexRadarPolygonfillCharts.series} type="radar" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default RadarChartClass;