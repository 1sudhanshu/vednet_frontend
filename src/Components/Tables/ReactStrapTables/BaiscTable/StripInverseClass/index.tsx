import { StripedRowInverseTable } from "../../../../../Constant";
import { Col, Card, Table, Row } from 'reactstrap';
import StripInverseClassTBody from "./StripInverseClassTBody";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const StripeInverseClass = () => {
  const spanText =`Use <code>.table-striped</code>to add zebra-striping to any table row within the <code></code>.This styling doesn't work in IE8 and below as :nth-child CSSselector isn't supported.`
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon span={true} dangerouslySetInnerHTML={spanText} Heading={StripedRowInverseTable}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table className="table-inverse" striped>
                <thead>
                  <tr>
                    <th scope="col">{"#"}</th>
                    <th scope="col">{"First Name"}</th>
                    <th scope="col">{"Last Name"}</th>
                    <th scope="col">{"Username"}</th>
                  </tr>
                </thead>
                <StripInverseClassTBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default StripeInverseClass;
