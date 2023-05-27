import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import {  LI, UL } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { ItemBulletsNavData } from "../../../../Data/Components/UiKits/Navs";
import OnHoverDropDown from "./OnHoverDropDown";

const ItemBullets = () => {


  return (
    <Fragment>
      <Col md="6">
        <Card>
          <HeadingCommon Heading="Item Bullets" />
          <CardBody>
            <div className="border nav-list">
              <UL className="nav-list-disc simple-list">
                {ItemBulletsNavData.map((data, index) => (
                    <LI key={index}>
                      <a href="#javascript">
                        <i className="fa fa-angle-right"></i>
                        <span> {data.tittle}</span>
                      </a>
                    </LI>
                ))}
              </UL>
            </div>
            <OnHoverDropDown/>
          
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ItemBullets;
