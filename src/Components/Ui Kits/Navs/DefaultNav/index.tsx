import { Card, Col, CardBody } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { deafultNavData } from "../../../../Data/Components/UiKits/Navs";
import OnHoverDropDown from "./OnHoverDropDown";

const DefaultNav = () => {

  return (
    <Col md="6">
      <Card>
        <HeadingCommon Heading="Default Nav" />
        <CardBody>
          <UL className="icon-lists border navs-icon simple-list">
            {deafultNavData.map((data, index) => (
              <LI key={index}>
                <a href="#javascript">
                  {data.logo}
                  <span>{data.tittle}</span>
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
export default DefaultNav;
