import { Col, Card, Row, Table } from 'reactstrap';
import HeadingCommon from '../../../../../Common/HeadingCommon';
import { StripedRow } from '../../../../../Constant';
import StripedRowClassTBody from './StripedRowClassTBody';

const StripedRowClass = () => {
  const spanText = `Use <code>.table-striped</code> to add zebra-striping to any table row within the. This styling doesn't work in IE8 and below as :nth-child CSS selector isn\'t supported.`;

  return (
    <Col sm="12">
      <Card>
        <HeadingCommon Heading={StripedRow} span={true} dangerouslySetInnerHTML={spanText}/>
        <Row className="card-block ">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table striped>
                <thead>
                  <tr>
                    <th scope="col">{"#"}</th>
                    <th scope="col">{"First Name"}</th>
                    <th scope="col">{"Last Name"}</th>
                    <th scope="col">{"Username"}</th>
                  </tr>
                </thead>
                <StripedRowClassTBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default StripedRowClass;