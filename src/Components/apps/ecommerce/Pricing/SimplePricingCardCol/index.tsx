import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../../../Common/HeadingCommon";
import { Href, LoremIpsum, Purchase, SimplePricingCard } from "../../../../../Constant";
import { H1, H3, H5, H6 } from "../../../../../AbstractElements";
import { SimplePricingCardTableData } from "../../../../../Data/apps/ecommerce/PricingCard";

const SimplePricingCardCol = () => {
  return (
    <Col sm="12">
      <div className="row pricing-content">
          {SimplePricingCardTableData.map((data, index) => (
            <Col xl="3" sm="6" className="xl-50 box-col-6" key={index}>
              <Card className="text-center pricing-simple">
                <CardBody>
                  <H3>{data.priceTittle}</H3>
                  <H1>{data.price}</H1>
                  <H6 className="mb-0">{data.priceDes}</H6>
                </CardBody>
                <a className="btn btn-lg btn-primary d-block w-100" href={Href}>
                  <H5 className="mb-0">{Purchase}</H5>
                </a>
              </Card>
            </Col>
          ))}
        </div>
    </Col>
  );
};

export default SimplePricingCardCol;