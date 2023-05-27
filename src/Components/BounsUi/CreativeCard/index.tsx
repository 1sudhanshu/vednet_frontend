import React, { Fragment } from "react";
import { Row, Container } from "reactstrap";
import CreativeCardsCommon from "./themeCards";

const CreativeCardContainer = () => {
  return (
    <Fragment>
      <Container fluid={true} className="basic-cards">
        <Row>
          <CreativeCardsCommon />
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreativeCardContainer;
