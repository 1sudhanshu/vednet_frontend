import { Fragment } from 'react';
import { Col } from 'reactstrap';
import { P } from '../../../../AbstractElements';
let datas = [
  { tittle: "Billing", class: "current", number: 2, desc: "pay for the Bill" },
  { tittle: "Getting", number: 3, desc: "Waiting for the goods" },
];
const DynamincSteps = () => {
  return (
    <Fragment>
      {datas.map((data, index) => (
        <Col key={index} sm="4" className={`u-step ${data?.class}`}>
          <span className="u-step-number">{data.number}</span>
          <div className="u-step-desc">
            <span className="u-step-title">{data.tittle}</span>
            <P>{data.desc}</P>
          </div>
        </Col>
      ))}
    </Fragment>
  );
};

export default DynamincSteps;
