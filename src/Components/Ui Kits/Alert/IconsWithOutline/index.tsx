import { Card, CardBody, Col } from "reactstrap";
import CommonAlert from "../Common/CommonAlert";
import HeadingCommon from "../../../../Common/HeadingCommon";
import StaticExampleAlert from "./StaticExampleAlert";
import { IconsWithOutlineData } from "../../../../Data/Components/UiKits/Alert/Data";

const IconsWithOutline = () => {
  const span = `Just add Any icon before text`;
  return (
    <Col sm="12" xl="6">
      <Card className="card height-equal">
        <HeadingCommon Heading="Alert With Icon Outline" dangerouslySetInnerHTML={span}
        />
        <CardBody>
          <StaticExampleAlert />
          {IconsWithOutlineData.map((data) => (
            <CommonAlert key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconsWithOutline;
