import { Col, Row } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { ToatalEarningDatas } from "../../../../Data/widgets/Chart/TotalEarning";

const DataDisplay = () => {
  return (
    <Row className=" text-center f-w-600">
      {ToatalEarningDatas.map((data, index) => (
        <Col key={index} xs="4" className={data?.colClass}>
          <div>
            <span className={`num ${data.spanClass}`}>
              {data.spanText}
              <i className="icon-angle-up f-12 ms-1" />
            </span>
            <H4 className="num m-0">
              <span className="counter color-bottom">{data.headingNumber}</span>
              M
            </H4>
            <span className="text-muted mt-2 mb-2 block-bottom">
              {data.time}
            </span>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default DataDisplay;
