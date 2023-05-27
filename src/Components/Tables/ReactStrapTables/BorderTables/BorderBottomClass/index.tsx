import { BorderBottomColor } from "../../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import BorderBottomClassTBody from "./BorderBottomClassTBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const BorderBottomClass = () => {
  const spanText = `Example of a table head border with<code>custom</code>  color. According to the custom color system options, you can set any of predefined colors by adding<code>.border-bottom-*</code>  class to the table head row. This technique works with all border styles demonstrated above.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={BorderBottomColor}span dangerouslySetInnerHTML={spanText}/> 
        <div className="table-responsive">
          <Table>
            <thead>
              <tr className="border-bottom-primary">
                <th scope="col">{"#"}</th>
                <th scope="col">{"First Name"}</th>
                <th scope="col">{"Last Name"}</th>
                <th scope="col">{"Username"}</th>
              </tr>
            </thead>
            <BorderBottomClassTBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default BorderBottomClass;