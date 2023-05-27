import { DefultStyling } from "../../../../Constant";
import { Row, Col, Card,  Table } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { useSelector } from "react-redux";
import { tableTypes, tablesData } from '../TablesType';

const DefultStylingClass = () => {
  const { tableData } = useSelector((state: tableTypes) => state.TableDataReducer);
  const spanText = ` use class <code>table table-styling</code> inside table element`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={DefultStyling} span dangerouslySetInnerHTML={spanText}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table className="table-styling">
                <thead>
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
      </Card>
    </Col>
  );
};

export default DefultStylingClass;