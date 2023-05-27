import { Row, Col, Card, CardBody } from "reactstrap";
import { icons } from "../../../../Constant";
import HeadingCommon from '../../../../Common/HeadingCommon';

interface propsType {
  iconType: string[];
  title: string;
  parentCallback: (tag: string) => void;
}
const FontawesomeCommon = (props: propsType) => {
  const getItag = (tag: any) => {
    props.parentCallback(tag);
  };

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon  Heading={`${props.title} ${icons} `}  H5spanClassName="m-b-0"  />
        <CardBody>
          <Row className="icon-lists">
            {props.iconType.map((icon, i: number) => (
              <Col sm="6" md="4" xl="3" key={i} onClick={() => getItag(icon)}>
                <i className={`fa fa-${icon}`}></i> {"fa fa-"}
                {icon}
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontawesomeCommon;
