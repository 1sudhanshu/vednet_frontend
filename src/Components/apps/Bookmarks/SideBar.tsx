import { Col } from "react-bootstrap";
import { Card, CardBody } from "reactstrap";
import { H6, Image, P } from "../../../AbstractElements";
import NavTab from "./NavTab";
import { MARKJENCOEMAIL, MarkJecno } from "../../../Constant";

const SideBar = () => {
  var images = require.context("../../../assets/images", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <Col xl="3" className="box-col-3">
      <div className="email-left-aside">
        <Card>
          <CardBody>
            <div className="email-app-sidebar left-bookmark">
              <div className="d-flex">
                <div className="media-size-email">
                  <Image
                    className="me-3 rounded-circle"
                    src={dynamicImage("user/user.png")}
                    alt="user"
                  />
                </div>
                <div className="flex-grow-1">
                  <H6 className="f-w-600">{MarkJecno}</H6>
                  <P>{MARKJENCOEMAIL}</P>
                </div>
              </div>
              <NavTab />
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default SideBar;
