import { HorizontalBorders } from "../../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import HorizontalTableClassTBody from "./HorizontalTableClassTBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const HorizontalTableClass = () => {
const spanText =` Example of <code>horizontal</code> table borders.This is a default table border style attached to <code>.table</code> class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using <code> .table-border-horizontal</code> class added to the table with<code>.table</code> class.`
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={HorizontalBorders} span dangerouslySetInnerHTML={spanText} />
        <div className="table-responsive">
          <Table className="table-border-horizontal">
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
            <HorizontalTableClassTBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default HorizontalTableClass;
