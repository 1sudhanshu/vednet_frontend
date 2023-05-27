import { TableHeadOptionsPrimaryBackground } from "../../../../Constant";
import { Row, Col, Card, Table } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import TableSuccess from "./TableSuccess";
import { useSelector } from "react-redux";
import { tableTypes, tablesData } from '../TablesType';

const TableBackgroundClass = () => {
  const { tableData } = useSelector((state: tableTypes) => state.TableDataReducer);
  const spanText = `Use background classes<code>.bg-*</code>and <code>table-primary</code>,<code>table-secondary</code>,<code>table-success</code>,<code>table-danger</code> ,<code>table-info</code>,<code>table-warning</code> to make custom<code>thead</code>  background. You can also use Stack Admin color palette classes for background. `;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={TableHeadOptionsPrimaryBackground} span dangerouslySetInnerHTML={spanText}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table>
                <thead className="bg-primary">
                  <tr>
                    <th scope="col">{"#"}</th>
                    <th scope="col">{"First Name"}</th>
                    <th scope="col">{"Last Name"}</th>
                    <th scope="col">{"Username"}</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.slice(0, 3).map((item: tablesData) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.user_name}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <TableSuccess />
      </Card>
    </Col>
  );
};

export default TableBackgroundClass;