import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { ColumnChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/HeadingCommon';
import { apexLineWithAnnotationCharts } from '../../../Data/Charts/ApexChart';

const ApexLineChartClass = () => {
  return (
      <Col sm='12'>
        <Card>
          <HeadingCommon Heading={ColumnChart} />
          <CardBody>
            <div id='annotationchart'>
              <Chart options={apexLineWithAnnotationCharts} series={apexLineWithAnnotationCharts.series} type="line" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default ApexLineChartClass;