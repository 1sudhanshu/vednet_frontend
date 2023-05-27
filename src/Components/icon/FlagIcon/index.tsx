import { Fragment, useState } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import IconMarkUp from "../Icon-markup";
import FlagIconCardBody from "./FlagIconCardBody";
import HeadingCommon from "../../../Common/HeadingCommon";
import { FlagIcons } from "../../../Constant/index";

const FlagIconContain = () => {
  const [iTag, setiTag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeadingCommon Heading={FlagIcons} H5ClassName="m-b-0" />
              <FlagIconCardBody setiTag={setiTag} setIcon={setIcon} />
            </Card>
          </Col>
        </Row>
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </Fragment>
  );
};
export default FlagIconContain;
