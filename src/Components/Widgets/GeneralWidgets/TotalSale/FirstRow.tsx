import { Col, Row } from "reactstrap";
import { TotalSaleDatas } from "../../../../Data/widgets/TotalSale";
import { H4, H5, H6 } from "../../../../AbstractElements";

const FirstRow = () => {
  return (
    <Row>
      {TotalSaleDatas.map((data, index) => (
        <Col sm="6" className={data.colClass} key={index}>
          <div className={data.divClass}>
            <div className="align-self-center me-3 text-start">
              <H6 className="mb-1">{data.tittle}</H6>
              <H4 className="mb-0">{data.subTittle}</H4>
            </div>
            <div className={`flex-grow-1 align-self-center ${data?.secondDiv}`}>
              {data.icon}
            </div>
            <div className="flex-grow-1">
              <H5 className="mb-0">
                $<span className="counter">{data.amount}</span>
              </H5>
              <span className="mb-1">{data.subAmount}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default FirstRow;
