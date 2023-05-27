import InversTableClassTBody from './InversTableClassTBody';
import { Col, Card, Table } from 'reactstrap';
import HeadingCommon from '../../../../../Common/HeadingCommon';
import { InverseTablePrimaryBackground } from '../../../../../Constant';

const InversePrimaryClass = () => {
  const spanText = ` Use a class <code> .bg-info, .bg-success, .bg-warning and .bg-danger classes. </code> with light text on dark backgrounds inside table element. <span className="d-block"> {'To set the light background color use .bg-[color] class where [color] is the value of your selected color from stack color palette. So for teal color background class will be .bg-teal'} </span>`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={InverseTablePrimaryBackground} span={true} dangerouslySetInnerHTML={spanText} />
        <div className="table-responsive">
          <Table striped className="bg-primary">
            <thead className="tbl-strip-thad-bdr">
              <tr>
                <th scope="col">{"#"}</th>
                <th scope="col">{"First Name"}</th>
                <th scope="col">{"Last Name"}</th>
                <th scope="col">{"Username"}</th>
                <th scope="col">{"Role"}</th>
                <th scope="col">{"Country"}</th>
              </tr>
            </thead>
            <InversTableClassTBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default InversePrimaryClass;
