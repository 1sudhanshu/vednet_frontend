import { TableHeadOptions } from "../../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import HeadingCommon from "../../../../../Common/HeadingCommon";
import TableClassBody from "./TableClassBody";

const TableClass = () => {
  const spanText = `Similar to tables and dark tables, use the modifier classes <code>.table-dark</code>  to make <code>thead</code> appear light or dark gray.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={TableHeadOptions} span={true} dangerouslySetInnerHTML={spanText}/>
        <div className="card-block row">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">{"#"}</th>
                    <th scope="col">{"First Name"}</th>
                    <th scope="col">{"Last Name"}</th>
                    <th scope="col">{"Username"}</th>
                  </tr>
                </thead>
                <TableClassBody />
              </Table>
            </div>
          </Col>
        </div>
      </Card>
    </Col>
  );
};

export default TableClass;
