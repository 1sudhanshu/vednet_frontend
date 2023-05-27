import { BasicTable } from "../../../../../Constant";
import { Col, Card, Table } from "reactstrap";
import HeadingCommon from "../../../../../Common/HeadingCommon";
import BasicTableClassTbody from './BasicTableClassTbody';

const BasicTableClass = () => {
  const spanText = `Use a class <code> table </code> to any table.`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={BasicTable} dangerouslySetInnerHTML={spanText} span={true}/>
        <div className="table-responsive">
          <Table>
            <thead>
              <tr>
                <th scope="col">{"#"}</th>
                <th scope="col">{"First Name"}</th>
                <th scope="col">{"Last Name"}</th>
                <th scope="col">{"Username"}</th>
                <th scope="col">{"Role"}</th>
                <th scope="col">{"Country"}</th>
              </tr>
            </thead>
            <BasicTableClassTbody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default BasicTableClass;
