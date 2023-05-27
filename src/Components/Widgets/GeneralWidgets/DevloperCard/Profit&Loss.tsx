import { Col } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import { ProfitLossDatas } from "../../../../Data/widgets/ProfitLoss";

const ProfitLoss = () => {
  return (
    <Col xs="6">
      <div className="text-md-end">
        <UL className="simple-list">
          {ProfitLossDatas.map((data, index) => (
            <LI key={index}>
              {data.Heading}
              <span className="product-stts font-primary ms-2">
                {data.number}
                {data.icon}
              </span>
            </LI>
          ))}
        </UL>
      </div>
    </Col>
  );
};

export default ProfitLoss;
