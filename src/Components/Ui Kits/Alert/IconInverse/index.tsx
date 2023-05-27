import { Card, CardBody, Col } from "reactstrap";
import CommonAlert from "../Common/CommonAlert";
import { IconInverseData } from "../../../../Data/Components/UiKits/Alert/IconInverse";
import HeadingCommon from "../../../../Common/HeadingCommon";
import StaticAlertExample from "./StaticAlertExample";

const IconInverse = () => {
  const span = `Just add Any icon before text`;
  return (
    <Col sm="12" xl="6">
      <Card className=" height-equal">
        <HeadingCommon Heading="Alert With Icon Inverse" dangerouslySetInnerHTML={span}/>
        <CardBody>
          <StaticAlertExample />
          {IconInverseData.map((data) => (
            <CommonAlert key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconInverse;
