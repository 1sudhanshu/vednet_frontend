import { ResponsiveTables } from "../../../../../Constant";
import { Col, Card, Table, Row } from "reactstrap";
import ResponsiveClassTbody from "./ResponsiveClassTbody";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const ResponsiveClass = () => {
  const spanText = `A <code>&lt;caption&gt;</code>functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon span dangerouslySetInnerHTML={spanText} Heading={ResponsiveTables}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table>
                <thead>
                  <tr>
                    <th scope="col">{"#"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                    <th scope="col">{"Table heading"}</th>
                  </tr>
                </thead>
                <ResponsiveClassTbody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
export default ResponsiveClass;
