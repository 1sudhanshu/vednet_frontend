import { SolidBorder } from "../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { useSelector } from "react-redux";
import { tableTypes, tablesData } from '../TablesType';

const SolidBorderClass = () => {
  const { tableData } = useSelector((state: tableTypes) => state.TableDataReducer);
  const spanText = ` Example of a <code>solid</code> border inside table <code>thead</code>. This border inherits all styling options from the default border style, the only difference is it has <code>2px</code> width. Sometimes it could be useful for visual separation and addition highlight. To use this border add <code>.border-solid</code> to the table head row. This border style works only with row borders.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={SolidBorder} span dangerouslySetInnerHTML={spanText}/>
        <div className="table-responsive">
          <Table className="table">
            <thead>
              <tr className="border-solid">
                <th scope="col">{"#"}</th>
                <th scope="col">{"First Name"}</th>
                <th scope="col">{"Last Name"}</th>
                <th scope="col">{"Username"}</th>
              </tr>
            </thead>
            <tbody>
              {tableData.slice(0, 3).map((item: tablesData) => (
                <tr className="border-solid" key={item.id}>
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

export default SolidBorderClass;
