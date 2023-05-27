import HeadingCommon from "../../../../Common/HeadingCommon";
import { DefaultTable } from "../../../../Constant";
import { Col, Card,  Table } from "reactstrap";

const DefaultTableClass = () => {
  const spanText = `Example of large table, Add <code>.table-de</code>class to the<code>.table</code>to create a table with large spacing. larger table all rows have<code>0.75rem</code> height.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={DefaultTable} span dangerouslySetInnerHTML={spanText}/>
        <div className="table-responsive">
          <Table className="table-de">
            <thead>
              <tr>
                <th scope="col">{"#"}</th>
                <th scope="col">{"First"}</th>
                <th scope="col">{"Last"}</th>
                <th scope="col">{"Handle"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{"1"}</th>
                <td>{"Mark"}</td>
                <td>{"Otto"}</td>
                <td>{"@mdo"}</td>
              </tr>
              <tr>
                <th scope="row">{"2"}</th>
                <td>{"Jacob"}</td>
                <td>{"Thornton"}</td>
                <td>{"@fat"}</td>
              </tr>
              <tr>
                <th scope="row">{"3"}</th>
                <td>{"Larry"}</td>
                <td>{"the Bird"}</td>
                <td>{"@twitter"}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};
export default DefaultTableClass;