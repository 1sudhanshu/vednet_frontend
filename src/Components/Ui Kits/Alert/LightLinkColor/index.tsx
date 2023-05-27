import { Card, CardBody, Col } from "reactstrap";
import { Alerts } from "../../../../AbstractElements";
import { lightLinkColorData } from "../../../../Data/Components/UiKits/Alert/LightLinkColor";
import HeadingCommon from "../../../../Common/HeadingCommon";
import StaticAlertExample from "./StaticAlertExample";

const LightLinkColor = () => {
  const span = `Use the <code>.alert-link</code> utility class to quickly provide
  matching colored links within any alert`;
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading="LinkColor" dangerouslySetInnerHTML={span} />
        <CardBody>
          <StaticAlertExample />
          {lightLinkColorData.map((data, index) => (
            <Alerts key={index} color={data.color}>
              {data.text}
              <a className="alert-link" href="#javascript">
                {data.example}
              </a>
              .Click It
            </Alerts>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightLinkColor;
