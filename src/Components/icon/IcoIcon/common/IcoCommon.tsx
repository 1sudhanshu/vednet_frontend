import { Row, Col, Card, CardBody } from "reactstrap";
import { icons } from "../../../../Constant";
import HeadingCommon from "../../../../Common/HeadingCommon";
interface propsType {
  title: string;
  iconType: any;
  parentCallback: (tag: string) => void;
}
const IcoCommon = ({ title, iconType, parentCallback }: propsType) => {
  const getItag = (tag: string) => {
    parentCallback(tag);
  };

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={`${title}${icons}`} H5spanClassName="m-b-0" />
        <CardBody>
          <Row className="icon-lists">
            {iconType.map((iconItem: string, i: number) => (
              <Col sm="6" lg="4" key={i} onClick={() => {getItag(iconItem);}}>
                <i className={`icofont icofont-${iconItem}`}></i> {iconItem}
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IcoCommon;
