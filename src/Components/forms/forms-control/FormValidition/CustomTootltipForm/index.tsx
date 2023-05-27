import { Card, CardBody } from 'reactstrap';
import { Tooltips } from '../../../../../Constant';
import Tooltipform from './Tooltipform';
import HeadingCommon from '../../../../../Common/HeadingCommon';

const CustomTootltipForm = () => {
const spanText =`If your form layout allows it, you can swap the<code className="text-danger">.feedback</code> classes for<code className="text-danger">.tooltip</code>classes to display validation feedback in a styled tooltip. Be sure to have a parent with<code className="text-danger">position: relative</code>on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.`
  return (
    <Card>
      <HeadingCommon Heading={Tooltips} span={true} dangerouslySetInnerHTML={spanText}/>
      <CardBody>
        <Tooltipform />
      </CardBody>
    </Card>
  );
};

export default CustomTootltipForm;
