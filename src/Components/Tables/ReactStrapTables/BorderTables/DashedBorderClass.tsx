import { DashedBorder } from "../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { tableTypes, tablesData } from '../TablesType';
import { useSelector } from "react-redux";

const DashedBorderClass = () => {
  const { tableData } = useSelector((state: tableTypes) => state.TableDataReducer);
  const spanText = ` Example of a <code>dashed</code> border inside table head. This border has <code>3px</code> width,<code>dashed</code> style and inherits all styling options from the default border style. Visually it displays table <code>head</code> and <code>body</code> as 2 separated table areas. To use this border add <code>.border-dashed</code> to the table head row.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={DashedBorder} span dangerouslySetInnerHTML={spanText}/>
        <div className="table-responsive">
          <Table className="table-dashed">
            <thead>
              <tr className="dashed">
                <th scope="col">{"#"}</th>
                <th scope="col">{"First Name"}</th>
                <th scope="col">{"Last Name"}</th>
                <th scope="col">{"Username"}</th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(0, 3).map((item: tablesData) => (
                <tr className="dashed" key={item.id}>
                  <th scope="row">{"1"}</th>
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

export default DashedBorderClass;