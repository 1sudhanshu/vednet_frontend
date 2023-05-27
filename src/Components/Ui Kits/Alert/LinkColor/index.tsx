import { Card, CardBody, Col } from "reactstrap";
import { Alerts } from "../../../../AbstractElements";
import { LinkColorsdata } from "../../../../Data/Components/UiKits/Alert/LinkColors";
import HeadingCommon from "../../../../Common/HeadingCommon";
import StaticAlertExample from "./StaticAlertExample";
import { Href } from "../../../../Constant";

const LinkColors = () => {
  const span = `Use the <code>.alert-link</code> utility class to quickly provide
  matching colored links within any alert`;
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon
          Heading="Link color in theme-color"
          dangerouslySetInnerHTML={span}
        />
        <CardBody>
          <StaticAlertExample/>
          {LinkColorsdata.map((data, index) => (
            <Alerts key={index} color={`${data.color} dark `}>
              {data.text}
              <a className="alert-link" href={Href}>
                {data.link}
              </a>
              {data.click}
            </Alerts>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default LinkColors;
