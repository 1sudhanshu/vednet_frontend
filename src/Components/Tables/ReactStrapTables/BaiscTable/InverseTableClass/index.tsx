import InverseTableClassTBody from "./InverseTableClassTBody";
import { Col, Card,  Table } from "reactstrap";
import { InverseTable } from "../../../../../Constant/index";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const InverseTableClass = () => {
  const spanText = ` Use a class <code> table-inverse </code> inside table element.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={InverseTable} span={true} dangerouslySetInnerHTML={spanText}/>
        <div className="table-responsive">
          <Table className="table-inverse">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
                <th scope="col">Role</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <InverseTableClassTBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default InverseTableClass;
