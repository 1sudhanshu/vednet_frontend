import React, { Fragment } from "react";
import { Col, Card } from "reactstrap";
import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import MyProfileClass from "./MyProfileClass";
import MutualFriends from "./MutualFriends";
import ActivityFeedClass from "./ActivityFeedClass";

const LeftBar = () => {
  return (
    <Fragment>
      <Col xl="12">
        <MyProfileClass />
      </Col>
      <Col xl="12">
        <Card>
          <Image  className= "img-fluid" alt= "timeline-image" src= {dynamicImage("social-app/timeline-3.png")}  /> 
        </Card>
      </Col>
      <Col xl="12"> <MutualFriends /> </Col>
      <Col xl="12"> <ActivityFeedClass /> </Col>
    </Fragment>
  );
};

export default LeftBar;
