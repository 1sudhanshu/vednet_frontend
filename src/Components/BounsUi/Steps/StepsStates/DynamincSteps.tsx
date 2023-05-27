import { Col } from "reactstrap";
import { Fragment } from "react";
import { P } from "../../../../AbstractElements";

const DynamincSteps = () => {
  let datas = [
    { divClass: "error bg-secondary" },
    { divClass: "current bg-success" },
    { divClass: "disabled", class: "text-dark" },
  ];
  return (
    <Fragment>
      {datas.map((data, index) => (
        <Col xl="3" lg="6" key={index}>
          <div className={`u-step  ${data.divClass}`}>
            <span className="u-step-number txt-primary">{index + 2}</span>
            <div className="u-step-desc">
              <span className="u-step-title">Getting</span>
              <P className={data?.class}>Waiting for the goods</P>
            </div>
          </div>
        </Col>
      ))}
    </Fragment>
  );
};

export default DynamincSteps;
