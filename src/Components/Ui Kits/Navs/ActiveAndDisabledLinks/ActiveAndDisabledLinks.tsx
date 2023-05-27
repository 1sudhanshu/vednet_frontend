import { LI, UL } from "../../../../AbstractElements";
import { Card, CardBody, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { ACtivNavData } from "../../../../Data/Components/UiKits/Navs";
import OnHoverDropDown from "./OnHoverDropDown";

const ActiveAndDisabledLinks = () => {
  return (
    <Col lg="6">
      <Card className="height-equal" style={{ minHeight: "638px" }}>
        <HeadingCommon Heading="Active and Disabled Links" />
        <CardBody>
          <UL className="icon-lists border navs-icon simple-list">
            {ACtivNavData.map((data, index) => (
              <LI key={index}>
                <a href="#javascripts" className={data?.aClassName}>
                  {data.logo}
                  <span> {data.tittle}</span>
                </a>
              </LI>
            ))}
          </UL>
          <OnHoverDropDown />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveAndDisabledLinks;
