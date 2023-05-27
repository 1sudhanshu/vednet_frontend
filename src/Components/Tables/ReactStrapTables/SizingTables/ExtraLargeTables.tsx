import { useSelector } from "react-redux";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { ExtraLargeTables } from "../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import { tableTypes, tablesData } from '../TablesType';

const ExtraLargeTablesClass = () => {
  const { tableData } = useSelector((state: tableTypes) => state.TableDataReducer);
  const spanText = ` Example of Extra large table, Add <code>.table-xl</code> class to the<code>.table</code> to create a table with extra large spacing. Extra larger table all rows have <code>1.25rem</code> height.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={ExtraLargeTables} span dangerouslySetInnerHTML={spanText}/>
        <div className="table-responsive">
          <Table size="xl">
            <thead>
              <tr>
                <th>{"#"}</th>
                <th>{"First Name"}</th>
                <th>{"Last Name"}</th>
                <th>{"Username"}</th>
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
      </Card>
    </Col>
  );
};

export default ExtraLargeTablesClass;
