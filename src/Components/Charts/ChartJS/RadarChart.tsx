import { Radar } from 'react-chartjs-2';
import { Col, Card, CardBody } from 'reactstrap';
import { RadarChart } from '../../../Constant/index';
import HeadingCommon from '../../../Common/HeadingCommon';
import { RadarChartData } from '../../../Data/Charts/ChartJsData';

const RadarChartClass = () => {
  return (
    <Col xl="6" md="12" className='box-col-12' >
      <Card>
        <HeadingCommon Heading={RadarChart} />
        <CardBody className='radar-chartjs'>
          <Radar id="myRadarGraph" data={RadarChartData} width="600px" height="300px" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadarChartClass;