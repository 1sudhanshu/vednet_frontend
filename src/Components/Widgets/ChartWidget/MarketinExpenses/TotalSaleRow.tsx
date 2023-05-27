import { Col, Row } from "reactstrap";
import { H6 } from "../../../../AbstractElements";
import { totalSaleRowDatas } from "../../../../Data/widgets/Chart/TotalSaleRow";

const TotalSaleRow = () => {
  return (
    <Row>
      {totalSaleRowDatas.map((data, index) => (
        <Col xs="12" key={index} className={data.colClass}>
          <H6>{data.heading}</H6>
          <Row className="progress-showcase ">
            <Col>
              <div className="progress" style={{ height: 5 }}>
                <div
                  className={`progress-bar-animated  progress-bar-striped ${data.progressClass}`}
                  role="progressbar"
                  style={{ width: `${data.progrssWidth}%` }}
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};
export default TotalSaleRow;
