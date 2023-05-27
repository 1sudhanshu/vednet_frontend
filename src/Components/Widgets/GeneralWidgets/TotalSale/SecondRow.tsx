import { Col, Row } from "reactstrap";
import { TotalSaleRowData } from "../../../../Data/widgets/TotalSale";
import { H4 } from "../../../../AbstractElements";

const SecondRow = () => {
  return (
    <Row>
      {TotalSaleRowData.map((data, index) => (
        <Col sm="6" key={index} className={data.colClass}>
          <div className={data.divClass}>
            <div className="align-self-center me-3">
              {data.number}%{data.NumberIcon}
            </div>
            <div className={`flex-grow-1 details ps-3 ${data?.SecondDiv}`}>
              <span className="mb-1">{data.tittle}</span>
              <H4 className="mb-0 counter digits">{data.amount}</H4>
            </div>
            <div className="flex-grow-1 align-self-center">{data.icon}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default SecondRow;
