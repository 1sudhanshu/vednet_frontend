import { HoverableRows } from "../../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import HoverableRowsTBody from "./HoverableRowsTBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const HoverableRowsClass = () => {
  const spanText = `Use a class <code> table-hover </code>to enable a hover state on table rows within a<code>tbody</code>.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={HoverableRows} span={true} dangerouslySetInnerHTML={spanText}/>
        <div className="table-responsive">
          <Table hover>
            <thead>
              <tr>
                <th scope="col">{"#"}</th>
                <th scope="col">{"First Name"}</th>
                <th scope="col">{"Last Name"}</th>
                <th scope="col">{"Username"}</th>
                <th scope="col">{"Role"}</th>
                <th scope="col">{"Country"}</th>
              </tr>
            </thead>
            <HoverableRowsTBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default HoverableRowsClass;
