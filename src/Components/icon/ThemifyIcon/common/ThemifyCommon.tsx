import { Row, Col, Card, CardBody } from "reactstrap";
import { icons } from "../../../../Constant";
import HeadingCommon from "../../../../Common/HeadingCommon";
interface propsType {
  iconType: string[];
  title: string;
  parentCallback: (val: string) => void;
}
const ThemifyCommon = ({ iconType, title, parentCallback }: propsType) => {
  const getItag = (tag: string) => {
    parentCallback(tag);
  };

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={`${title}${icons}`} H5ClassName="m-b-0" />
        <CardBody>
          <Row className="icon-lists">
            {iconType.map((icon, i: number) => {
              return (
                <Col sm="6" lg="4" key={i} onClick={(e) => getItag(icon)}>
                  <i className={`${icon}`}></i> {icon}
                </Col>
              );
            })}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ThemifyCommon;
