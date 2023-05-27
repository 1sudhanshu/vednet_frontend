import { VerticalBorders } from "../../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import VerticalBordersClassTBody from "./VerticalBordersClassTBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const VerticalBordersClass = () => {
  const spanText = ` Example of <code>Vertical </code> table borders. This is a default table border style attached to <code> .table</code>class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using <code> .table-border-vertical</code> class added to the table with <code>.table</code> class.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={VerticalBorders} span dangerouslySetInnerHTML={spanText}/>
        <div className="table-responsive">
          <Table className="table-border-vertical">
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
            <VerticalBordersClassTBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default VerticalBordersClass;
