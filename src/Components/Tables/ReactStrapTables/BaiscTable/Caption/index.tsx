import { Caption } from "../../../../../Constant";
import { Col, Card, Table, Row } from "reactstrap";
import HeadingCommon from "../../../../../Common/HeadingCommon";
import CaptionTBody from "./CaptionTBody";

const CaptionClass = () => {
  const spanText = `A <code>&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={Caption} span={true} dangerouslySetInnerHTML={spanText}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table>
                <caption>{"List of users"}</caption>
                <thead>
                  <tr>
                    <th scope="col">{"#"}</th>
                    <th scope="col">{"First Name"}</th>
                    <th scope="col">{"Last Name"}</th>
                    <th scope="col">{"Username"}</th>
                  </tr>
                </thead>
                <CaptionTBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CaptionClass;
