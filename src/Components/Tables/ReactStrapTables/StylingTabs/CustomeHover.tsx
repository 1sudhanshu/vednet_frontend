import { CustomTableColorHoverStripped } from "../../../../Constant";
import { Row, Col, Card, Table } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { useSelector } from "react-redux";
import { tableTypes, tablesData } from '../TablesType';

const CustomHoverClass = () => {
  const { tableData } = useSelector((state: tableTypes) => state.TableDataReducer);
  const spanText =` Use class <code>table-hover, table-striped table-*</code> <code>table-info</code>,<code>table-success</code>, <code>table-success</code>,<code>table-info</code>, <code>table-danger</code>,<code>table-primary</code>, <code>table-secondary</code>,<code>table-light</code>, <code>table-active</code> inside table element.`
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={CustomTableColorHoverStripped} span dangerouslySetInnerHTML={spanText}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive table-border-radius">
              <Table hover striped className="table-styling  table-primary">
                <thead>
                  <tr>
                    <th scope="col">{"#"}</th>
                    <th scope="col">{"First Name"}</th>
                    <th scope="col">{"Last Name"}</th>
                    <th scope="col">{"Username"}</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item: tablesData) => (
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
      </Card>
    </Col>
  );
};

export default CustomHoverClass;