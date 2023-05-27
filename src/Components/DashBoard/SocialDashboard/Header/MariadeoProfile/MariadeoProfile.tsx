import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H5 } from "../../../../../AbstractElements";
import { MyProfile } from "../../../../../Constant";
import ImageGroup from "./ImageGroup";
import MariadeoProfileBody from "./MariadeoProfileBody";

const MariadeoProfile = () => {
  return (
    <Col xl="4" md="6" className="  xl-40 box-col-5">
      <Card className=" card-with-border">
        <CardHeader className=" card-no-border">
          <H5 className="d-inline-block">{MyProfile}</H5>
          <span className="setting-round pull-right d-inline-block mt-0">
            <i className="fa fa-spin fa-cog" />
          </span>
        </CardHeader>
        <CardBody className="socialprofile filter-cards-view pt-0">
          <MariadeoProfileBody />
          <div className="customers text-center social-group">
            <ImageGroup />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MariadeoProfile;
