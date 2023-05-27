import { TableHeadOptions } from "../../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import HeadingCommon from "../../../../../Common/HeadingCommon";
import TableHeadClassTBody from "./TableHeadClassTBody";

const TableHeadClass = () => {
  const spanText = `Similar to tables and dark tables, use the modifier classes <code>.bg-*</code>and  <code>.table-light</code> to make <code>thead</code> appear light or dark gray.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={TableHeadOptions} span={true} dangerouslySetInnerHTML={spanText}/>
        <div className="card-block row">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table>
                <thead className="thead-light">
                  <tr>
                    <th>#</th>
                    <th scope="col">{"First Name"}</th>
                    <th scope="col">{"Last Name"}</th>
                    <th scope="col">{"Username"}</th>
                    <th scope="col">{"Role"}</th>
                    <th scope="col">{"Country"}</th>
                  </tr>
                </thead>
                <TableHeadClassTBody />
              </Table>
            </div>
          </Col>
        </div>
      </Card>
    </Col>
  );
};

export default TableHeadClass;