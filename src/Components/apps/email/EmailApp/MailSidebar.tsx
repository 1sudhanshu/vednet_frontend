import { Card, CardBody } from "reactstrap";
import { H6, LI, P, UL, Image } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import {Inbox,MarkJecno,MARKJENCOEMAIL,NewMail} from "../../../../Constant";
import DynamicEmailSideBar from "./DynamicEmailSideBar";

const MailSidebar = () => {
  const images = require.context("../../../../assets/images", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <div className="email-left-aside">
      <Card>
        <CardBody>
          <div className="email-app-sidebar">
            <div className="d-flex">
              <div className="media-size-email">
                <Image className="me-2 rounded-circle" src={dynamicImage("user/user.png")} alt="Image"/>
              </div>
              <div className="flex-grow-1">
                <H6 className="f-w-600">{MarkJecno} </H6>
                <P>{MARKJENCOEMAIL}</P>
              </div>
            </div>
            <UL className="simple-list nav main-menu " role="tablist">
              <LI className= "nav-item" >
                <Link className="btn-primary btn-block btn-mail w-100" to={`${process.env.PUBLIC_URL}/email/email-compose`}>
                  <i className="icofont icofont-envelope me-2"></i> {NewMail}
                </Link>
              </LI>
              <LI className= "nav-item" >
                <Link className="show" to={`${process.env.PUBLIC_URL}/email/email-app`}>
                  <span className="title">
                    <i className="icon-import"></i> {Inbox}
                  </span>
                  <span className="badge pull-right email-badge">(236)</span>
                </Link>
              </LI>
              <DynamicEmailSideBar />
            </UL>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
export default MailSidebar;