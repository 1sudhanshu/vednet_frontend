import { Card, CardHeader, Col } from "reactstrap";
import { H4, H5, P } from "../../../../AbstractElements";

const AverageSpeed = () => {
  return (
    <Col sm="12">
      <Card className=" card-with-border resolve-complain average-radial">
        <CardHeader className=" card-no-border chart-block">
          <div className="d-flex">
            <div
              className="radial-bar radial-bar-20 radial-bar-danger"
              data-label="20%"
            ></div>
            <div className="flex-grow-1">
              <H5>Average Speed Of Ans.</H5>
              <P className="f-12">
              A prompt response directly translates into happy customers.....
              </P>
              <H4 className="mb-0">
                0m:65s
                <span className="f-14 light-font"> / Goal : 0m : 45s</span>
              </H4>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Col>
  );
};

export default AverageSpeed;
