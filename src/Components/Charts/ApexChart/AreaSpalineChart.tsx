import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { AreaSpalineChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/HeadingCommon';
import { areaSpaline } from '../../../Data/Charts/ApexChart';

const AreaSpalineChartClass = () => {
  return (
      <Col sm='12' xl='6' className='box-col-6'>
        <Card>
          <HeadingCommon Heading={AreaSpalineChart} />
          <CardBody>
            <div id='basic-apex'>
              <Chart options={areaSpaline} series={areaSpaline.series} height="350" type="area" />
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default AreaSpalineChartClass;