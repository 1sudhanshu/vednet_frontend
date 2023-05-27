import { BorderlessTable } from "../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { useSelector } from "react-redux";
import { tableTypes, tablesData } from '../TablesType';

const BorderlessClass = () => {
  const { tableData } = useSelector((state: tableTypes) => state.TableDataReducer);
  const spanText = ` Example of <code>horizontal</code>table borders. This is a default table border style attached to<code> .table</code> class.All borders have the same grey color and style, table itself doesn't have a border, but you can add this border using<code>.table-bordernone</code> class added to the table with <code>.table</code> class.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={BorderlessTable} span dangerouslySetInnerHTML={spanText}/>
        <div className="table-responsive">
          <Table borderless>
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
      </Card>
    </Col>
  );
};

export default BorderlessClass;
