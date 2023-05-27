import { Card, CardBody, Col } from "reactstrap";
import { H6, Image, P } from "../../../AbstractElements";
import { MARKJENCOEMAIL, MarkJecno } from "../../../Constant/index";
import NavComponent from "./NavComponent";
import { Fragment, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import TabComponent from "./TabComponent";
import { ContactReducerType } from './ContactType';

const LeftSide = () => {
  const { users} = useSelector((state: ContactReducerType) => state.ContactReducer);
  const images = require.context("../../../assets/images", true);
  const [activeTab, setActiveTab] = useState("1");
  const dynamicImage = (image: string) => {return images(`./${image}`);};
  const callback = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);
  return (
    <Fragment>
      <Col xl="3" className="box-col-3">
        <div className="email-left-aside">
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark">
                <div className="d-flex">
                  <div className="media-size-email">
                    <Image className="me-3 rounded-circle" src={dynamicImage("user/user.png")} alt=""/>
                  </div>
                  <div className="flex-grow-1">
                    <H6 className="f-w-600">{MarkJecno}</H6>
                    <P>{MARKJENCOEMAIL}</P>
                  </div>
                </div>
                <NavComponent callbackActive={callback} />
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>
      <Col xl="9" md="12" className="xl-70 box-col-9">
        <div className="email-right-aside bookmark-tabcontent contacts-tabs">
          <div className="email-body radius-left">
            <div className="ps-0">
              <TabComponent activeTab={activeTab} users={users}/>
            </div>
          </div>
        </div>
      </Col>
    </Fragment>
  );
};

export default LeftSide;
