import { CardBody, Col, Row } from "reactstrap";
import { flagIconData } from "../../../Data/icon/flagicon";
import { H5, H6 } from "../../../AbstractElements";
import { Dispatch, SetStateAction } from "react";
interface propsType {
  setiTag: Dispatch<SetStateAction<string | object>>;
  setIcon: Dispatch<SetStateAction<string | object>>;
}
interface valueType {
  abbrivation: string;
}
const FlagIconCardBody = ({ setiTag, setIcon }: propsType) => {
  const getItag = (tag: valueType) => {
    setiTag({
      iTag: '<i className="fi fi-' + tag.abbrivation + '"></i>',
    });
    setIcon({
      icon: "fi fi-" + tag.abbrivation + " fa-2x",
    });
  };
  return (
    <CardBody>
      <Row className="icon-lists flag-icons">
        {flagIconData.map((icon, i) => (
          <Col xs="12" sm="6" xl="4" key={i} onClick={() => getItag(icon)}>
            <div className="d-flex">
              <i className={`flag-icon fi fi-${icon.abbrivation}`}></i>
              <div className="flex-grow-1 align-self-center">
                <H5>{icon.abbrivation}</H5>
                <H6 className="mt-0">{icon.name}</H6>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </CardBody>
  );
};
export default FlagIconCardBody;
