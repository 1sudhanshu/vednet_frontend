import { DoubleBorder } from "../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { useSelector } from "react-redux";
import { tableTypes, tablesData } from '../TablesType';

const DoubleBorderClass = () => {
  const { tableData } = useSelector((state: tableTypes) => state.TableDataReducer);
  const spanText = ` Example of a <code>double</code> border inside table head. This border has <code>3px</code> width, <code>double</code>   style and inherits all styling options from the default border style. Visually it displays table <code>head</code> and<code>body</code> as 2 separated table areas. To use this border add <code>.border-double</code> to the table head row.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={DoubleBorder} span dangerouslySetInnerHTML={spanText}/>
        <div className="table-responsive">
          <Table className="table-double">
            <thead>
              <tr className="double">
                <th scope="col">{"#"}</th>
                <th scope="col">{"First Name"}</th>
                <th scope="col">{"Last Name"}</th>
                <th scope="col">{"Username"}</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item: tablesData) => (
                <tr className="double" key={item.id}>
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
export default DoubleBorderClass;