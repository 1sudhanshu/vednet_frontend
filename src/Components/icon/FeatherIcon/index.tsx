import { Fragment, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import {  H6 } from "../../../AbstractElements";
import IconMarkUp from "../Icon-markup";
import { FeatherIcons } from "../../../Constant";
import { feather_icons } from "../../../Data/icon/featherData";
import HeadingCommon from "../../../Common/HeadingCommon";

const FeatherIconContainer = () => {
  const featherIcons = require("feather-icons");
  const [iTag, setiTag] = useState<string | object>("");
  const [feathericon, setfeatherIcon] = useState<string | object>("");

  const getItag = (tag: string) => {
    setiTag({
      iTag: '<i data-feather="' + tag + '"></i>',
    });
    setfeatherIcon({
      feathericon: tag,
    });
  };

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeadingCommon H5span={true}  H5ClassName="m-b-0" H5SpanText={FeatherIcons}  H5spanClassName="digits"/>
              <CardBody>
                <Row className="icon-lists feather-icons">
                  {feather_icons.map((singleIcon: string, i) => (
                    <Col xs="12" sm="6" xl="4" key={i} onClick={(e) => getItag(singleIcon)}>
                      <div className="d-flex">
                        <div dangerouslySetInnerHTML={{__html:featherIcons.icons[singleIcon].toSvg(singleIcon)}}/>
                        <div className="flex-grow-1 align-self-center">
                          <H6 className="mt-0">{singleIcon}</H6>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
       <IconMarkUp itag={iTag} icons={feathericon} /> 
    </Fragment>
  );
};

export default FeatherIconContainer;
