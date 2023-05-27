import { Col, Card, CardBody } from "reactstrap";
import { OL } from "../../../AbstractElements";
import LI from "../../../CommonElements/ListGroup/ListItem";
import HeadingCommon from "../../../Common/HeadingCommon";
import DynamicBreadCrumb from "./DynamicBreadCrumb";

const ColoredNavigation = () => {
  const span = `use class <code>.breadcrumb-colored .bg-primary</code>`;

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading="Colored breadcrumb" dangerouslySetInnerHTML={span}/>
        <CardBody>
          <OL
            className="breadcrumb breadcrumb-colored m-b-30 bg-primary"
            style={{ padding: "0.75rem 1rem", borderRadius: "0.25rem" }}
          >
            <LI className="breadcrumb-item">
              <a href="#javascript">Home</a>
            </LI>
            <LI className="breadcrumb-item active">Library</LI>
          </OL>
          <DynamicBreadCrumb />
        </CardBody>
      </Card>
    </Col>
  );
};
export default ColoredNavigation;
